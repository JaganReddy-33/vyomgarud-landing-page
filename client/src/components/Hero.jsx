import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal pt-20 sm:pt-24 lg:pt-0"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-gray-900"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 123, 0, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 123, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Drone Illustration - Hidden on mobile, visible on larger screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 hidden md:flex items-center justify-center z-0"
      >
        <svg
          className="w-full h-full max-w-4xl max-h-4xl"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Drone Body */}
          <motion.path
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            d="M200 150 L250 180 L200 210 L150 180 Z"
            stroke="#ff7b00"
            strokeWidth="2"
            fill="rgba(255, 123, 0, 0.1)"
          />
          {/* Propellers */}
          <motion.circle
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 150px" }}
            cx="150"
            cy="150"
            r="25"
            stroke="#ff7b00"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <motion.circle
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "250px 150px" }}
            cx="250"
            cy="150"
            r="25"
            stroke="#ff7b00"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <motion.circle
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "150px 210px" }}
            cx="150"
            cy="210"
            r="25"
            stroke="#ff7b00"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <motion.circle
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "250px 210px" }}
            cx="250"
            cy="210"
            r="25"
            stroke="#ff7b00"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          {/* Camera/Sensor */}
          <circle cx="200" cy="180" r="8" fill="#ff7b00" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 border border-accent/20 rounded-full mb-4 sm:mb-6"
            >
              <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-wider">Military Technology</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight"
            >
              Advanced UAV Systems for{' '}
              <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent block sm:inline">
                Tactical Excellence
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Precision-engineered drone technology delivering unmatched reliability and performance in the most demanding operational environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-accent text-white text-sm sm:text-base font-semibold rounded-sm hover:bg-accent/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-accent/30"
              >
                Get Started
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-gray-700 text-white text-sm sm:text-base font-semibold rounded-sm hover:border-accent hover:text-accent transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Enhanced Drone Visual */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <svg
                  className="w-full h-full max-w-md"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Main Drone Body - Enhanced */}
                  <motion.path
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    d="M200 140 L260 180 L200 220 L140 180 Z"
                    stroke="#ff7b00"
                    strokeWidth="3"
                    fill="rgba(255, 123, 0, 0.15)"
                  />
                  {/* Propellers with motion blur effect */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "140px 140px" }}
                  >
                    <circle cx="140" cy="140" r="30" stroke="#ff7b00" strokeWidth="2" fill="none" opacity="0.4" />
                    <circle cx="140" cy="140" r="20" stroke="#ff7b00" strokeWidth="1.5" fill="none" opacity="0.6" />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "260px 140px" }}
                  >
                    <circle cx="260" cy="140" r="30" stroke="#ff7b00" strokeWidth="2" fill="none" opacity="0.4" />
                    <circle cx="260" cy="140" r="20" stroke="#ff7b00" strokeWidth="1.5" fill="none" opacity="0.6" />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "140px 220px" }}
                  >
                    <circle cx="140" cy="220" r="30" stroke="#ff7b00" strokeWidth="2" fill="none" opacity="0.4" />
                    <circle cx="140" cy="220" r="20" stroke="#ff7b00" strokeWidth="1.5" fill="none" opacity="0.6" />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "260px 220px" }}
                  >
                    <circle cx="260" cy="220" r="30" stroke="#ff7b00" strokeWidth="2" fill="none" opacity="0.4" />
                    <circle cx="260" cy="220" r="20" stroke="#ff7b00" strokeWidth="1.5" fill="none" opacity="0.6" />
                  </motion.g>
                  {/* Enhanced Camera/Sensor */}
                  <circle cx="200" cy="180" r="12" fill="#ff7b00" opacity="0.9" />
                  <circle cx="200" cy="180" r="8" fill="white" opacity="0.8" />
                  {/* Connection lines */}
                  <line x1="200" y1="140" x2="200" y2="180" stroke="#ff7b00" strokeWidth="2" opacity="0.5" />
                  <line x1="200" y1="220" x2="200" y2="180" stroke="#ff7b00" strokeWidth="2" opacity="0.5" />
                </svg>
              </motion.div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements - Hidden on mobile */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-accent opacity-50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;


