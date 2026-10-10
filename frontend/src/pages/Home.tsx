import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Activity,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HeartPulse,
  LockKeyhole,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from 'lucide-react';

export const Home: React.FC = () => {
  const { user } = useAuth();

  const dashboardPath =
    user?.role === 'ADMIN'
      ? '/admin/dashboard'
      : user?.role === 'HEALTHCARE_PROFESSIONAL'
        ? '/doctor/appointments'
        : '/patient/appointments';

  const features = [
    {
      icon: Stethoscope,
      number: '01',
      title: 'Find the right specialist',
      description:
        'Explore healthcare professionals by specialization and review their profiles before booking.',
      tone: 'bg-teal-50 text-teal-700',
    },
    {
      icon: CalendarDays,
      number: '02',
      title: 'Appointments, simplified',
      description:
        'Manage your appointments in one place and keep track of your upcoming consultations.',
      tone: 'bg-blue-50 text-blue-700',
    },
    {
      icon: ShieldCheck,
      number: '03',
      title: 'Your care, organized',
      description:
        'Access your available medical records and consultation information through your account.',
      tone: 'bg-violet-50 text-violet-700',
    },
  ];

  return (
    <div className="space-y-20 pb-10 pt-4 sm:pt-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2rem] border border-teal-100 bg-gradient-to-br from-white via-white to-teal-50/80">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="relative grid items-center gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/90 px-3.5 py-2 text-xs font-semibold text-teal-800 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600" />
              </span>
              Healthcare that feels more connected
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Better care starts with
              <span className="mt-2 block text-teal-700">
                the right connection.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Discover healthcare professionals, manage appointments, and keep
              your care information organized in one simple place.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {user ? (
                <Link
                  to={dashboardPath}
                  className="mc-button-primary group"
                >
                  Go to your dashboard
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/professionals"
                    className="mc-button-primary group"
                  >
                    <Stethoscope className="h-4 w-4" />
                    Find a doctor
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link to="/register" className="mc-button-secondary">
                    Create your account
                  </Link>
                </>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-700" />
                Convenient appointment management
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-700" />
                Role-based access
              </span>
            </div>
          </div>

          {/* Decorative product preview, not live patient data */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -right-3 top-10 h-28 w-28 rounded-full bg-teal-200/40 blur-2xl" />

            <div className="relative rounded-3xl border border-white bg-white p-5 shadow-[0_24px_80px_-24px_rgba(15,73,76,0.25)] sm:p-7">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-sm">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold tracking-tight text-slate-900">
                      MediConnect
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Your care, in one place
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800">
                  Connected
                </span>
              </div>

              <div className="py-6">
                <p className="text-sm font-medium text-slate-500">
                  Healthcare made simpler
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                  Focus on your wellbeing.
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Tools to help you stay organized throughout your care journey.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-800">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-800">
                      Appointments
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Keep track of your visits
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-800">
                      Health information
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Access available records
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-800">
                    <UsersRound className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-800">
                      Healthcare professionals
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Discover available specialists
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl bg-teal-50 px-4 py-3">
                <LockKeyhole className="h-4 w-4 shrink-0 text-teal-800" />
                <p className="text-xs leading-5 text-teal-900">
                  Your account provides access to features based on your role.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg sm:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Your schedule
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Organized in one place
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            A simpler healthcare experience
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Everything starts with better access.
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Find the tools you need to navigate appointments and healthcare
            information without unnecessary complexity.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.number}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.tone}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold tracking-wider text-slate-300">
                    {feature.number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
                <Link
                  to={user ? dashboardPath : '/professionals'}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-800"
                >
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 sm:px-10 sm:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-teal-300">
              <HeartPulse className="h-4 w-4" />
              Take the next step
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Make managing your healthcare a little simpler.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Explore healthcare professionals and manage your care through
              your MediConnect account.
            </p>
          </div>

          <Link
            to={user ? dashboardPath : '/professionals'}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-teal-50"
          >
            {user ? 'Open dashboard' : 'Browse doctors'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
