import React from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
  category: "SQL" | "Python" | "Machine Learning" | "Power BI" | "Excel";
  demoUrl: string;
  githubUrl: string;
  svgContent: React.ReactNode;
}

export const projects: Project[] = [
  // Python Projects
  {
    id: 1,
    title: "E-commerce Data Analysis",
    description: "Analyzed customer behavior and purchase patterns for an e-commerce platform using Python and Pandas, resulting in a 15% increase in conversion rates.",
    tag: "Python",
    tagColor: "bg-blue-100 text-blue-700",
    category: "Python",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    svgContent: (
      <div className="w-full h-full bg-blue-50 rounded-md flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <div className="absolute top-2 left-2 font-bold text-gray-700">E-commerce Analysis</div>
          
          {/* Bar chart representation */}
          <div className="flex items-end h-3/4 space-x-6 mt-8 mx-auto max-w-xs">
            <div className="flex flex-col items-center">
              <div className="h-24 w-10 bg-blue-100 relative">
                <div className="absolute bottom-0 w-10 h-1/2 bg-blue-500"></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Q1</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-10 bg-blue-100 relative">
                <div className="absolute bottom-0 w-10 h-3/5 bg-blue-500"></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Q2</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-10 bg-blue-100 relative">
                <div className="absolute bottom-0 w-10 h-5/6 bg-blue-500"></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Q3</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-24 w-10 bg-blue-100 relative">
                <div className="absolute bottom-0 w-10 h-2/5 bg-blue-500"></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Q4</div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-2 right-2 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-100 mr-1"></div>
              <span className="text-gray-600">Total Views</span>
            </div>
            <div className="flex items-center mt-1">
              <div className="w-3 h-3 bg-blue-500 mr-1"></div>
              <span className="text-gray-600">Conversions</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description: "Used Python and scikit-learn to build a predictive model that identifies customers at risk of churning, enabling proactive retention strategies.",
    tag: "Python",
    tagColor: "bg-blue-100 text-blue-700",
    category: "Python",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    svgContent: (
      <div className="w-full h-full bg-blue-50 rounded-md flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <div className="absolute top-2 left-2 font-bold text-gray-700">Churn Analysis</div>
          
          {/* Pie chart representation */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-blue-100"></div>
              <div className="absolute inset-0 rounded-full bg-blue-500" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 50%)' }}></div>
              <div className="absolute inset-0 rounded-full border-4 border-white"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-lg font-bold text-gray-800">78%</div>
              </div>
            </div>
            
            <div className="ml-4 text-sm">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-blue-500 mr-2"></div>
                <span>Retained (78%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-100 mr-2"></div>
                <span>Churned (22%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Power BI Projects
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Designed an interactive financial dashboard using Power BI to visualize KPIs and trends, helping stakeholders make data-driven investment decisions.",
    tag: "Power BI",
    tagColor: "bg-green-100 text-green-700",
    category: "Power BI",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    svgContent: (
      <div className="w-full h-full bg-green-50 rounded-md flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <div className="absolute top-2 left-2 font-bold text-gray-700">Financial Dashboard</div>
          
          {/* Line chart representation */}
          <div className="h-32 w-full max-w-md mx-auto mt-10 relative">
            {/* This is a simplified representation of a line chart */}
            <div className="absolute bottom-0 w-full h-px bg-gray-300"></div>
            <div className="absolute left-0 h-full w-px bg-gray-300"></div>
            
            <div className="absolute bottom-0 left-0 w-full h-full">
              <div className="relative w-full h-full">
                <div className="absolute bottom-0 left-1/6 w-2 h-2 rounded-full bg-green-500"></div>
                <div className="absolute bottom-1/4 left-2/6 w-2 h-2 rounded-full bg-green-500"></div>
                <div className="absolute bottom-1/6 left-3/6 w-2 h-2 rounded-full bg-green-500"></div>
                <div className="absolute bottom-1/2 left-4/6 w-2 h-2 rounded-full bg-green-500"></div>
                <div className="absolute bottom-2/3 left-5/6 w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            {/* Month labels */}
            <div className="absolute -bottom-5 left-1/6 text-xs text-gray-500">Jan</div>
            <div className="absolute -bottom-5 left-2/6 text-xs text-gray-500">Feb</div>
            <div className="absolute -bottom-5 left-3/6 text-xs text-gray-500">Mar</div>
            <div className="absolute -bottom-5 left-4/6 text-xs text-gray-500">Apr</div>
            <div className="absolute -bottom-5 left-5/6 text-xs text-gray-500">May</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Sales Performance Analysis",
    description: "Created a comprehensive Power BI dashboard to analyze sales performance across regions, products, and time periods with drill-down capabilities.",
    tag: "Power BI",
    tagColor: "bg-green-100 text-green-700",
    category: "Power BI",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    svgContent: (
      <div className="w-full h-full bg-green-50 rounded-md flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <div className="absolute top-2 left-2 font-bold text-gray-700">Sales Dashboard</div>
          
          <div className="grid grid-cols-2 gap-3 mt-8 mx-auto">
            <div className="bg-white p-2 rounded-md shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Revenue</div>
              <div className="text-lg font-bold text-gray-800">$1.2M</div>
              <div className="text-xs text-green-600">↑ 12.4%</div>
            </div>
            
            <div className="bg-white p-2 rounded-md shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Units Sold</div>
              <div className="text-lg font-bold text-gray-800">8,542</div>
              <div className="text-xs text-green-600">↑ 8.7%</div>
            </div>
            
            <div className="bg-white p-2 rounded-md shadow-sm col-span-2">
              <div className="text-xs text-gray-500 mb-1">Regional Performance</div>
              <div className="flex items-center justify-between">
                <div className="text-xs">West</div>
                <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="text-xs">85%</div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div className="text-xs">East</div>
                <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{width: '72%'}}></div>
                </div>
                <div className="text-xs">72%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // SQL Projects
  {
    id: 5,
    title: "Market Segmentation",
    description: "Performed customer segmentation analysis for a retail client using SQL and clustering algorithms, identifying 4 key customer segments for targeted marketing.",
    tag: "SQL",
    tagColor: "bg-yellow-100 text-yellow-700",
    category: "SQL",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    svgContent: (
      <div className="w-full h-full bg-yellow-50 rounded-md flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <div className="absolute top-2 left-2 font-bold text-gray-700">Customer Segments</div>
          
          {/* Scatter plot representation */}
          <div className="h-32 w-full max-w-md mx-auto mt-10 relative border border-gray-200 rounded">
            {/* Quadrant dividers */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px border-l border-dashed border-gray-300"></div>
            <div className="absolute left-0 right-0 top-1/2 h-px border-t border-dashed border-gray-300"></div>
            
            {/* Cluster points representation */}
            <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-blue-500 opacity-70"></div>
            <div className="absolute top-1/4 right-1/3 w-4 h-4 rounded-full bg-blue-500 opacity-70"></div>
            <div className="absolute top-1/5 right-1/5 w-3 h-3 rounded-full bg-blue-500 opacity-70"></div>
            
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
            <div className="absolute top-1/5 left-1/3 w-4 h-4 rounded-full bg-yellow-500 opacity-70"></div>
            <div className="absolute top-1/3 left-1/5 w-3 h-3 rounded-full bg-yellow-500 opacity-70"></div>
            
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
            <div className="absolute bottom-1/3 right-1/5 w-3 h-3 rounded-full bg-green-500 opacity-70"></div>
            <div className="absolute bottom-1/5 right-1/3 w-4 h-4 rounded-full bg-green-500 opacity-70"></div>
            
            <div className="absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
            <div className="absolute bottom-1/5 left-1/5 w-4 h-4 rounded-full bg-red-500 opacity-70"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-red-500 opacity-70"></div>
            
            {/* Axis labels */}
            <div className="absolute -right-5 top-1/2 text-xs text-gray-500">Income</div>
            <div className="absolute left-1/2 -top-5 text-xs text-gray-500">Frequency</div>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-1 left-2 text-xs flex flex-wrap gap-x-3">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
              <span className="text-gray-600">Segment A</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
              <span className="text-gray-600">Segment B</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
              <span className="text-gray-600">Segment C</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
              <span className="text-gray-600">Segment D</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Database Optimization",
    description: "Improved database performance by optimizing SQL queries and restructuring database schema, resulting in a 40% reduction in query execution time.",
    tag: "SQL",
    tagColor: "bg-yellow-100 text-yellow-700",
    category: "SQL",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    svgContent: (
      <div className="w-full h-full bg-yellow-50 rounded-md flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <div className="absolute top-2 left-2 font-bold text-gray-700">Query Performance</div>
          
          <div className="mt-10 mx-auto">
            <div className="flex items-center mb-3">
              <div className="w-24 text-xs text-right pr-2">Before</div>
              <div className="h-4 w-48 bg-gray-200 rounded-sm overflow-hidden">
                <div className="h-full bg-red-500" style={{width: '80%'}}></div>
              </div>
              <div className="text-xs text-gray-600 pl-2">3.2s</div>
            </div>
            
            <div className="flex items-center">
              <div className="w-24 text-xs text-right pr-2">After</div>
              <div className="h-4 w-48 bg-gray-200 rounded-sm overflow-hidden">
                <div className="h-full bg-green-500" style={{width: '30%'}}></div>
              </div>
              <div className="text-xs text-gray-600 pl-2">1.3s</div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="text-xs text-gray-500">Query Optimization Results</div>
              <div className="text-lg font-bold text-green-600 mt-1">-59% Execution Time</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Machine Learning Projects
  {
    id: 7,
    title: "Predictive Sales Forecasting",
    description: "Developed a machine learning model to forecast monthly sales with 92% accuracy, helping the business optimize inventory management and staffing.",
    tag: "Machine Learning",
    tagColor: "bg-purple-100 text-purple-700",
    category: "Machine Learning",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    svgContent: (
      <div className="w-full h-full bg-purple-50 rounded-md flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <div className="absolute top-2 left-2 font-bold text-gray-700">Sales Forecast</div>
          
          <div className="h-32 w-full max-w-md mx-auto mt-10 relative">
            <div className="absolute bottom-0 w-full h-px bg-gray-300"></div>
            <div className="absolute left-0 h-full w-px bg-gray-300"></div>
            
            {/* Actual data points */}
            <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polyline 
                points="0,70 20,60 40,65 60,50 80,40" 
                fill="none" 
                stroke="#8b5cf6" 
                strokeWidth="2"
              />
              {/* Forecast data (dashed) */}
              <polyline 
                points="80,40 100,30" 
                fill="none" 
                stroke="#8b5cf6" 
                strokeWidth="2"
                strokeDasharray="4"
              />
            </svg>
            
            {/* Month labels */}
            <div className="absolute -bottom-5 left-0 text-xs text-gray-500">Jan</div>
            <div className="absolute -bottom-5 left-1/5 text-xs text-gray-500">Feb</div>
            <div className="absolute -bottom-5 left-2/5 text-xs text-gray-500">Mar</div>
            <div className="absolute -bottom-5 left-3/5 text-xs text-gray-500">Apr</div>
            <div className="absolute -bottom-5 left-4/5 text-xs text-gray-500">May</div>
            <div className="absolute -bottom-5 right-0 text-xs text-gray-500">Jun</div>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-2 right-2 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-0.5 bg-purple-500 mr-1"></div>
              <span className="text-gray-600">Actual</span>
            </div>
            <div className="flex items-center mt-1">
              <div className="w-3 h-0.5 bg-purple-500 mr-1 border-b border-dashed"></div>
              <span className="text-gray-600">Forecast</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Image Recognition System",
    description: "Built an image recognition system using convolutional neural networks to automatically classify product images with 95% accuracy.",
    tag: "Machine Learning",
    tagColor: "bg-purple-100 text-purple-700",
    category: "Machine Learning",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    svgContent: (
      <div className="w-full h-full bg-purple-50 rounded-md flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <div className="absolute top-2 left-2 font-bold text-gray-700">Image Recognition</div>
          
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="relative">
              <div className="h-16 bg-gray-200 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xs text-gray-500">Input Image</div>
              </div>
            </div>
            <div className="relative">
              <div className="h-16 bg-purple-200 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xs text-gray-500">Feature Maps</div>
              </div>
            </div>
            <div className="col-span-2 relative">
              <div className="h-10 bg-purple-300 rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xs text-gray-500">Neural Network</div>
              </div>
            </div>
            <div className="col-span-2 flex justify-around items-center py-2">
              <div className="text-center">
                <div className="text-xs font-medium">Product A</div>
                <div className="text-xs text-purple-700">95%</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-medium">Product B</div>
                <div className="text-xs text-gray-500">3%</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-medium">Product C</div>
                <div className="text-xs text-gray-500">2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // Excel Projects
  {
    id: 9,
    title: "Advanced Financial Model",
    description: "Developed a comprehensive financial model in Excel to forecast business performance and evaluate investment opportunities with scenario analysis.",
    tag: "Excel",
    tagColor: "bg-red-100 text-red-700",
    category: "Excel",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    svgContent: (
      <div className="w-full h-full bg-red-50 rounded-md flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <div className="absolute top-2 left-2 font-bold text-gray-700">Financial Model</div>
          
          <div className="mt-6 bg-white p-2 rounded border border-gray-200 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">ROI Comparison</div>
            <div className="grid grid-cols-4 gap-1 text-xs mb-2">
              <div className="font-medium">Scenario</div>
              <div className="font-medium">Year 1</div>
              <div className="font-medium">Year 2</div>
              <div className="font-medium">Year 3</div>
              
              <div className="bg-gray-50 p-1">Base</div>
              <div className="bg-gray-50 p-1">12%</div>
              <div className="bg-gray-50 p-1">15%</div>
              <div className="bg-gray-50 p-1">18%</div>
              
              <div className="bg-red-50 p-1">Optimistic</div>
              <div className="bg-red-50 p-1">18%</div>
              <div className="bg-red-50 p-1">22%</div>
              <div className="bg-red-50 p-1">25%</div>
              
              <div className="bg-gray-50 p-1">Conservative</div>
              <div className="bg-gray-50 p-1">8%</div>
              <div className="bg-gray-50 p-1">10%</div>
              <div className="bg-gray-50 p-1">12%</div>
            </div>
            
            <div className="text-xs text-gray-500 italic">
              *Based on market analysis and historical data
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Dashboard with Dynamic Charts",
    description: "Created an automated Excel dashboard with dynamic charts and slicers that allows stakeholders to interactively explore sales and marketing data.",
    tag: "Excel",
    tagColor: "bg-red-100 text-red-700",
    category: "Excel",
    demoUrl: "#",
    githubUrl: "https://github.com/",
    svgContent: (
      <div className="w-full h-full bg-red-50 rounded-md flex items-center justify-center p-4">
        <div className="relative w-full h-full">
          <div className="absolute top-2 left-2 font-bold text-gray-700">Excel Dashboard</div>
          
          <div className="grid grid-cols-2 gap-2 mt-6">
            <div className="bg-white p-1 rounded shadow-sm col-span-2">
              <div className="text-xs text-gray-600 mb-1">Filters</div>
              <div className="flex gap-1">
                <div className="bg-gray-100 px-2 py-1 rounded-sm text-xs">Region ▼</div>
                <div className="bg-gray-100 px-2 py-1 rounded-sm text-xs">Year ▼</div>
                <div className="bg-gray-100 px-2 py-1 rounded-sm text-xs">Product ▼</div>
              </div>
            </div>
            
            <div className="bg-white p-1 rounded shadow-sm h-20 relative">
              <div className="text-xs text-gray-600">Revenue Trend</div>
              <div className="absolute bottom-1 left-1 right-1 h-14">
                <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                  <polyline 
                    points="0,40 20,35 40,30 60,20 80,25 100,15" 
                    fill="none" 
                    stroke="#ef4444" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            
            <div className="bg-white p-1 rounded shadow-sm h-20 relative">
              <div className="text-xs text-gray-600">Product Mix</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-4 border-white relative overflow-hidden">
                  <div className="absolute h-full w-full bg-red-300" style={{clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 0)'}}></div>
                  <div className="absolute h-full w-full bg-blue-300" style={{clipPath: 'polygon(50% 50%, 100% 100%, 0 100%)'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  }
];