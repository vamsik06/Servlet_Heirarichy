"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const handleStart = () => {
    setCurrentStep(1);
    // Show GenericServlet after a delay
    setTimeout(() => {
      setCurrentStep(2);
      // Show arrows after GenericServlet
      setTimeout(() => {
        setCurrentStep(3);
        // Show HttpServlet after arrows
        setTimeout(() => {
          setCurrentStep(4);
          // Show arrow after HttpServlet
          setTimeout(() => {
            setCurrentStep(5);
            // Show UserDefinedServlet after arrow
            setTimeout(() => {
              setCurrentStep(6);
              // Show arrow from HttpServlet to UserDefinedServlet
              setTimeout(() => {
                setCurrentStep(7);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`h-[600px] ${isDark ? 'bg-gray-900 text-white' : 'bg-background text-foreground'} border-4 border-black rounded-lg `}>
      <div className="container mx-auto h-full flex flex-col">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            Servlet Hierarchy Structure
          </h1>
        </header>
        <main className="flex flex-col items-center flex-1">
          {/* Buttons at top */}
          <div className="flex justify-center gap-4 mb-6">
            <Button 
              onClick={handleStart}
              disabled={currentStep > 0}
              size="lg"
              className={`${isDark ? 'bg-transparent border-white text-white hover:bg-white hover:text-black border-2' : ''}`}
            >
              Start
            </Button>
            <Button 
              onClick={handleReset}
              variant="outline" 
              size="lg"
              className={`${isDark ? 'bg-transparent border-white text-white hover:bg-white hover:text-black' : ''}`}
            >
              Reset
            </Button>
            <Button 
              onClick={toggleTheme}
              variant="outline" 
              size="lg"
              className={`px-3 ${isDark ? 'bg-transparent border-white text-white hover:bg-white hover:text-black' : ''}`}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </Button>
          </div>
  <div className="relative flex-1 w-full max-w-[700px] mx-auto gap-2"  style={{ height: '400px' }}>
  {/* Use responsive breakpoints for absolute positions */}
  {currentStep >= 1 && (
    <>
      <div className={`absolute left-[10%] top-[5%] w-[30%] min-w-[100px] h-[50px] flex items-center justify-center border rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-background'} font-medium shadow-sm animate-in fade-in duration-500`}>Servlet</div>
      <div className={`absolute left-[40%] top-[5%] w-[30%] min-w-[100px] h-[50px] flex items-center justify-center border rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-background'} font-medium shadow-sm animate-in fade-in duration-500`}>ServletConfig</div>
      <div className={`absolute left-[85%] top-[5%] w-[30%] min-w-[100px] h-[50px] transform -translate-x-[50%] flex items-center justify-center border rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-background'} font-medium shadow-sm animate-in fade-in duration-500`}>Serialization</div>
    </>
  )}

  {currentStep >= 2 && (
    <div className={`absolute left-1/2 top-[35%] w-[80%] max-w-[320px] transform -translate-x-1/2 h-[50px] flex items-center justify-center border rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-background'} font-medium shadow-sm animate-in fade-in duration-500`}>GenericsServlet</div>
  )}

  {currentStep >= 4 && (
    <div className={`absolute left-1/2 top-[60%] w-[80%] max-w-[320px] transform -translate-x-1/2 h-[50px] flex items-center justify-center border rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-background'} font-medium shadow-sm animate-in fade-in duration-500`}>HttpServlet</div>
  )}

  {currentStep >= 6 && (
    <div className={`absolute left-1/2 top-[85%] w-[80%] max-w-[320px] transform -translate-x-1/2 h-[50px] flex items-center justify-center border rounded-lg ${isDark ? 'bg-gray-800 border-gray-600' : 'bg-background'} font-medium shadow-sm animate-in fade-in duration-500`}>UserDefinedServlet</div>
  )}

  {/* Arrows with responsive alignment */}
  {currentStep >= 5 && (
    <svg className="absolute left-1/2 top-[47%] transform -translate-x-1/2" width="20" height="60">
      <line x1="10" y1="0" x2="10" y2="50" stroke={isDark ? "#fff" : "#000"} strokeWidth="4" />
      <polygon points="4,50 16,50 10,58" fill={isDark ? "#fff" : "#000"} />
    </svg>
  )}

  {currentStep >= 7 && (
    <svg className="absolute left-1/2 top-[72%] transform -translate-x-1/2" width="20" height="60">
      <line x1="10" y1="0" x2="10" y2="50" stroke={isDark ? "#fff" : "#000"} strokeWidth="4" />
      <polygon points="4,50 16,50 10,58" fill={isDark ? "#fff" : "#000"} />
    </svg>
  )}

  {currentStep >= 3 && (
    <>
      {/* Servlet -> GenericServlet */}
      <svg className="absolute left-[30%] top-[17%]" width="20" height="150">
        <line x1="10" y1="0" x2="10" y2="70" stroke={isDark ? "#9ca3af" : "#666"} strokeWidth="4" strokeDasharray="4 4" />
        <polygon points="4,70 16,70 10,78" fill={isDark ? "#9ca3af" : "#666"} />
      </svg>
      {/* ServletConfig -> GenericServlet */}
      <svg className="absolute left-[50%] top-[17%] transform -translate-x-1/2" width="20" height="90">
        <line x1="10" y1="0" x2="10" y2="70" stroke={isDark ? "#9ca3af" : "#666"} strokeWidth="4" strokeDasharray="4 4" />
        <polygon points="4,70 16,70 10,78" fill={isDark ? "#9ca3af" : "#666"} />
      </svg>
      {/* Serialization -> GenericServlet */}
      <svg className="absolute left-[71%] top-[17%]" width="20" height="90">
        <line x1="10" y1="0" x2="10" y2="70" stroke={isDark ? "#9ca3af" : "#666"} strokeWidth="4" strokeDasharray="4 4" />
        <polygon points="4,70 16,70 10,78" fill={isDark ? "#9ca3af" : "#666"} />
      </svg>
    </>
  )}
</div>

        </main>
      </div>
    </div>
  );
}
