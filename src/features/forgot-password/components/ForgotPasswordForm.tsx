import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { useForgotPassword } from '../hooks/useForgotPassword';
import Step1Identity from './Step1Identity';
import Step2Otp from './Step2Otp';
import Step3ResetPassword from './Step3ResetPassword';

const ForgotPasswordForm = () => {
  const {
    currentStep,
    identity,
    setIdentity,
    otp,
    setOtp,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    toggleShowPassword,
    loading,
    error,
    handleSendOtp,
    handleValidateOtp,
    handleResetPassword,
    goBack,
  } = useForgotPassword();

  const renderStep = () => {
    switch (currentStep) {
      case 'IDENTITY':
        return (
          <Step1Identity
            key="identity"
            identity={identity}
            setIdentity={setIdentity}
            loading={loading}
            onSubmit={handleSendOtp}
            onBack={goBack}
          />
        );
      case 'OTP':
        return (
          <Step2Otp
            key="otp"
            identity={identity}
            otp={otp}
            setOtp={setOtp}
            loading={loading}
            onSubmit={handleValidateOtp}
            onBack={goBack}
            onResend={handleSendOtp}
            error={error}
          />
        );
      case 'RESET':
        return (
          <Step3ResetPassword
            key="reset"
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            loading={loading}
            onSubmit={handleResetPassword}
            onBack={goBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* global error message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3"
          >
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-8 text-center text-xs text-gray-400">
        Protected by Guardian Life Insurance Ltd. &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
