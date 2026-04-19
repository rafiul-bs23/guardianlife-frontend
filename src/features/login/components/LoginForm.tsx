import { Eye, EyeOff, Mail, Phone, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getIdentifierIcon = (value: string) => {
  if (!value) return <Mail className="w-5 h-5 text-gray-400" />;
  return EMAIL_REGEX.test(value.trim())
    ? <Mail className="w-5 h-5 text-primary" />
    : <Phone className="w-5 h-5 text-primary" />;
};

const getIdentifierLabel = (value: string): string => {
  if (!value) return 'Email or Mobile Number';
  return EMAIL_REGEX.test(value.trim()) ? 'Email Address' : 'Mobile Number';
};

const LoginForm = () => {
  const {
    identifier,
    setIdentifier,
    password,
    setPassword,
    showPassword,
    toggleShowPassword,
    loading,
    error,
    handleSubmit,
  } = useLogin();

  const inputBase =
    'w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-brand-gray placeholder-gray-400 text-sm font-medium outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-md"
    >
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-dark tracking-tight">Welcome Back</h1>
        <p className="mt-2 text-sm text-gray-500">
          Sign in to manage your policies and benefits
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Identifier field */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
            {getIdentifierLabel(identifier)}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              {getIdentifierIcon(identifier)}
            </span>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Enter email or mobile number"
              autoComplete="username"
              disabled={loading}
              className={inputBase}
            />
          </div>
        </div>

        {/* Password field */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Password
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Lock className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              disabled={loading}
              className={`${inputBase} pr-12`}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              disabled={loading}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
            >
              {showPassword
                ? <Eye className="w-5 h-5" />
                : <EyeOff className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-xs font-semibold text-primary hover:text-primary/70 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3"
            >
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl py-4 shadow-md shadow-primary/30 transition-all duration-200"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Signing in…</span>
            </>
          ) : (
            <span>Sign In</span>
          )}
        </button>

        <div className="flex justify-center pt-4">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-primary font-bold hover:underline transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>

      {/* Footer note */}
      <p className="mt-8 text-center text-xs text-gray-400">
        Protected by Guardian Life Insurance Ltd. &copy; {new Date().getFullYear()}
      </p>
    </motion.div>
  );
};

export default LoginForm;
