import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/contact', async (req, res) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      const savedMessage = await storage.createContactMessage(contactData);
      res.status(201).json({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
        data: savedMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message
        });
      } else {
        res.status(500).json({
          success: false,
          message: 'An error occurred while sending your message.'
        });
      }
    }
  });

  // Get all contact messages (for administrative purposes)
  app.get('/api/contact/messages', async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching messages.'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
