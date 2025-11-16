import { motion } from 'framer-motion';

const Showcase = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'High Performance',
      description: 'Cutting-edge propulsion systems',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Secure & Reliable',
      description: 'Military-grade encryption',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'Precision Control',
      description: 'Advanced flight systems',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Choose VyomGarud
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Excellence in every mission-critical operation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 text-accent">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-charcoal/50 backdrop-blur-sm rounded-lg border border-gray-800 p-8 md:p-12 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Stats/Info */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Operational Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">99%</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Mission Success Rate</p>
                    <p className="text-gray-400 text-sm">Proven reliability in field operations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">24/7</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Support Available</p>
                    <p className="text-gray-400 text-sm">Round-the-clock technical assistance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">100+</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Active Deployments</p>
                    <p className="text-gray-400 text-sm">Worldwide operational presence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Visual Element */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-accent/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-accent/30 rounded-full"
              />
              <div className="relative z-10">
                <svg
                  className="w-32 h-32 md:w-40 md:h-40 text-accent"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Simplified drone icon */}
                  <rect x="75" y="75" width="50" height="50" rx="5" stroke="currentColor" strokeWidth="3" fill="rgba(255, 123, 0, 0.1)" />
                  <circle cx="100" cy="100" r="8" fill="currentColor" />
                  <circle cx="85" cy="85" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                  <circle cx="115" cy="85" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                  <circle cx="85" cy="115" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                  <circle cx="115" cy="115" r="12" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;

