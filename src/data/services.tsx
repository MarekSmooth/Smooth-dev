import React from 'react';
import {
  WebsiteGlyph, EcommerceGlyph, MobileGlyph, DatabaseGlyph,
  DiagnosticsGlyph, CleaningGlyph, ReinstallGlyph, UpgradeGlyph, ShieldGlyph, TransferGlyph, BuildGlyph, OnboardingGlyph, PackageGlyph,
} from './serviceIcons';

export interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  priceKey: string;
  featureKeys?: string[];
  badgeKey?: string;
  accent: string;
  iconColor: string;
  iconBg: string;
  premium?: boolean;
}

// Cool palette (violet/blue/cyan/teal) — software/dev category.
export const softwareServices: ServiceItem[] = [
  {
    id: 'website',
    icon: <WebsiteGlyph className="w-6 h-6" />,
    titleKey: 'services.website.title',
    descriptionKey: 'services.website.description',
    priceKey: 'services.website.price',
    featureKeys: ['services.website.feature1', 'services.website.feature2', 'services.website.feature3', 'services.website.feature4'],
    accent: 'from-violet-500/20 to-purple-600/10',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
  },
  {
    id: 'ecommerce',
    icon: <EcommerceGlyph className="w-6 h-6" />,
    titleKey: 'services.ecommerce.title',
    descriptionKey: 'services.ecommerce.description',
    priceKey: 'services.ecommerce.price',
    featureKeys: ['services.ecommerce.feature1', 'services.ecommerce.feature2', 'services.ecommerce.feature3', 'services.ecommerce.feature4'],
    accent: 'from-cyan-500/20 to-blue-600/10',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
  },
  {
    id: 'mobile',
    icon: <MobileGlyph className="w-6 h-6" />,
    titleKey: 'services.mobile.title',
    descriptionKey: 'services.mobile.description',
    priceKey: 'services.mobile.price',
    featureKeys: ['services.mobile.feature1', 'services.mobile.feature2', 'services.mobile.feature3', 'services.mobile.feature4'],
    accent: 'from-blue-500/20 to-indigo-600/10',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
  },
  {
    id: 'database',
    icon: <DatabaseGlyph className="w-6 h-6" />,
    titleKey: 'services.database.title',
    descriptionKey: 'services.database.description',
    priceKey: 'services.database.price',
    featureKeys: ['services.database.feature1', 'services.database.feature2', 'services.database.feature3', 'services.database.feature4'],
    accent: 'from-emerald-500/20 to-teal-600/10',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
  },
];

// Warm palette (orange/amber/red) — hardware/IT service category.
export const hardwareServices: ServiceItem[] = [
  {
    id: 'diagnostics',
    icon: <DiagnosticsGlyph className="w-6 h-6" />,
    titleKey: 'hw.diagnostics.title',
    descriptionKey: 'hw.diagnostics.description',
    priceKey: 'hw.diagnostics.price',
    accent: 'from-amber-500/20 to-orange-600/10',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
  },
  {
    id: 'cleaning',
    icon: <CleaningGlyph className="w-6 h-6" />,
    titleKey: 'hw.cleaning.title',
    descriptionKey: 'hw.cleaning.description',
    priceKey: 'hw.cleaning.price',
    accent: 'from-orange-500/20 to-amber-600/10',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
  },
  {
    id: 'windows-install',
    icon: <ReinstallGlyph className="w-6 h-6" />,
    titleKey: 'hw.windowsInstall.title',
    descriptionKey: 'hw.windowsInstall.description',
    priceKey: 'hw.windowsInstall.price',
    accent: 'from-amber-500/20 to-yellow-600/10',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
  },
  {
    id: 'hardware-upgrade',
    icon: <UpgradeGlyph className="w-6 h-6" />,
    titleKey: 'hw.hardwareUpgrade.title',
    descriptionKey: 'hw.hardwareUpgrade.description',
    priceKey: 'hw.hardwareUpgrade.price',
    accent: 'from-orange-500/20 to-red-600/10',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
  },
  {
    id: 'virus-removal',
    icon: <ShieldGlyph className="w-6 h-6" />,
    titleKey: 'hw.virusRemoval.title',
    descriptionKey: 'hw.virusRemoval.description',
    priceKey: 'hw.virusRemoval.price',
    accent: 'from-red-500/20 to-orange-600/10',
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10',
  },
  {
    id: 'backup',
    icon: <TransferGlyph className="w-6 h-6" />,
    titleKey: 'hw.backup.title',
    descriptionKey: 'hw.backup.description',
    priceKey: 'hw.backup.price',
    accent: 'from-amber-500/20 to-orange-600/10',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
  },
  {
    id: 'custom-build',
    icon: <BuildGlyph className="w-6 h-6" />,
    titleKey: 'services.custom.title',
    descriptionKey: 'services.custom.description',
    priceKey: 'services.custom.price',
    accent: 'from-orange-500/20 to-amber-600/10',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
  },
  {
    id: 'corporate-onboarding',
    icon: <OnboardingGlyph className="w-6 h-6" />,
    titleKey: 'hw.corpOnboarding.title',
    descriptionKey: 'hw.corpOnboarding.description',
    priceKey: 'hw.corpOnboarding.price',
    badgeKey: 'hw.corpOnboarding.badge',
    accent: 'from-amber-500/25 via-orange-500/15 to-red-600/10',
    iconColor: 'text-amber-300',
    iconBg: 'bg-amber-500/15',
    premium: true,
  },
  {
    id: 'corporate-pc-setup',
    icon: <PackageGlyph className="w-6 h-6" />,
    titleKey: 'hw.corpPcSetup.title',
    descriptionKey: 'hw.corpPcSetup.description',
    priceKey: 'hw.corpPcSetup.price',
    badgeKey: 'hw.corpPcSetup.badge',
    accent: 'from-red-500/25 via-orange-500/15 to-amber-600/10',
    iconColor: 'text-red-300',
    iconBg: 'bg-red-500/15',
    premium: true,
  },
];
