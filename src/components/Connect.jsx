import React, { useState } from "react";
import { FaCopy, FaCheck, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Connect = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sagar112113@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = "sagar112113@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="align-element relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing together.
            </p>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="mailto:sagar112113@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Vidyasagar,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss..."
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 inline-flex items-center gap-3"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 transition-transform group-hover:scale-110" />
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="https://www.linkedin.com/in/vidyasagar-akhumukhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-purple-500/50 text-purple-300 font-semibold rounded-xl backdrop-blur-sm hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
            >
              <FaLinkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
              Connect on LinkedIn
            </a>
          </div>

          {/* Email Backup Section */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <p className="text-sm text-gray-400 mb-4">
              Or reach out directly via email:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3 bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-700/50">
                <FaEnvelope className="w-4 h-4 text-purple-400" />
                <span className="text-lg font-mono text-purple-300 select-all">
                  sagar112113@gmail.com
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                disabled={copied}
                className={`relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 ${copied
                  ? "bg-green-600/20 text-green-300 border border-green-500/30"
                  : "bg-gray-700/50 text-gray-300 border border-gray-600/50 hover:bg-gray-600/50"
                  }`}
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <FaCheck className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <FaCopy className="w-4 h-4" />
                    Copy Email
                  </>
                )}

                {copied && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    ✓
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Connect;
