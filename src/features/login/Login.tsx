import { type Variants, motion } from 'framer-motion';
import LoginForm from './components/LoginForm';

const panelVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const formPanelVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row overflow-hidden">

      {/* ── Left branding panel ── */}
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12 relative overflow-hidden"
      >
        {/* Background decorative circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 left-1/4 w-64 h-64 rounded-full bg-white/5" />

        {/* Logo */}
        <div>
          <div className="inline-flex items-center justify-center bg-white rounded-2xl px-6 py-3 shadow-lg">
            <img
              src="/assets/images/shared/logo.png"
              alt="Guardian Life Insurance"
              className="h-10 object-contain"
            />
          </div>
        </div>

        {/* Centre copy */}
        <div className="relative z-10 space-y-6">
          <div className="w-12 h-1 bg-white/50 rounded-full" />
          <h2 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
            Protecting What<br />Matters Most
          </h2>
          <p className="text-white/75 text-lg leading-relaxed max-w-sm">
            Access your policies, track claims, and manage your coverage — all in one place.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 pt-4">
            {['25+ Years of Trust', 'ISO Certified', '1M+ Policyholders'].map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full"
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="text-white/40 text-xs relative z-10">
          Guardian Life Insurance Ltd. — A trusted name in Bangladesh
        </p>
      </motion.div>

      {/* ── Right form panel ── */}
      <motion.div
        variants={formPanelVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col"
      >
        {/* Mobile-only top bar */}
        <div className="lg:hidden flex items-center gap-4 bg-primary px-6 py-4">
          <img
            src="/assets/images/shared/logo.png"
            alt="Guardian Life Insurance"
            className="h-8 object-contain"
          />
        </div>

        {/* Form area */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 sm:px-12 bg-white">
          <LoginForm />
        </div>
      </motion.div>

    </div>
  );
};

export default Login;
