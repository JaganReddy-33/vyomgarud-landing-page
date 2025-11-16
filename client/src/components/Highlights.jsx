import { motion } from 'framer-motion';

const Highlights = () => {
  const highlights = [
    {
      title: 'Military-Grade Reliability',
      description: 'Rigorous testing and certification processes ensure operational readiness in extreme conditions.',
    },
    {
      title: 'Advanced AI Integration',
      description: 'State-of-the-art machine learning algorithms for autonomous decision-making and mission optimization.',
    },
    {
      title: 'Modular Architecture',
      description: 'Flexible platform design allowing rapid configuration changes for diverse mission requirements.',
    },
  ];

  return (
    <section
      id="highlights"
      className="py-20 md:py-32 bg-charcoal relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Key Highlights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            What sets VyomGarud apart in the UAV industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-charcoal/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;


