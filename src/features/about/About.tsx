import { useTranslation } from 'react-i18next';
import WhoWeAre from './components/WhoWeAre';
import OurJourney from './components/OurJourney';
import MissionVision from './components/MissionVision';
import OurAchievements from './components/OurAchievements';
import Milestones from './components/Milestones';
import GovernanceTrust from './components/GovernanceTrust';
import AboutHeader from './components/AboutHeader';
import { useAboutDynamic } from './hooks/useAboutDynamic';
import { mockAboutData } from './api/mockData';
import { useHeader } from '../../shared/hooks/useHeader';
import type {
  WhoWeAreData,
  OurJourneyData,
  MissionVisionData,
  OurAchievementsData,
  MilestonesData,
  GovernanceTrustData
} from './types';

const About = () => {
  const { t } = useTranslation('about');
  const { data: headerData, isLoading: isHeaderLoading } = useHeader('about-us');
  const { data: dynamicData } = useAboutDynamic();

  return (
    <main className="min-h-screen bg-white">
      {!isHeaderLoading && headerData && <AboutHeader data={headerData} />}
      <WhoWeAre
        data={{
          ...(t('who_we_are', { returnObjects: true }) as WhoWeAreData),
          image: mockAboutData?.who_we_are?.image
        }}
      />
      <OurJourney
        data={{
          ...(t('our_journey', { returnObjects: true }) as OurJourneyData),
          image: mockAboutData?.our_journey?.image
        }}
      />
      <MissionVision
        data={{
          ...(t('mission_vision', { returnObjects: true }) as MissionVisionData),
          image: mockAboutData?.mission_vision?.image
        }}
      />


      {/* Dynamic Overrides where available */}
      <OurAchievements
        data={{
          ...(t('our_achievements', { returnObjects: true }) as OurAchievementsData),
          image: mockAboutData?.our_achievements?.image,
          achievements: dynamicData?.awards?.length ? dynamicData.awards.map(a => ({ title: a.name, subtitle: a.description })) : []
        }}
      />
      <Milestones
        data={{
          ...(t('milestones', { returnObjects: true }) as MilestonesData),
          image: mockAboutData?.milestones?.image,
          milestones: dynamicData?.milestones?.length ? dynamicData.milestones : []
        }}
      />

      <GovernanceTrust
        data={{
          ...(t('governance_trust', { returnObjects: true }) as GovernanceTrustData),
          image: mockAboutData?.governance_trust?.image,
          points: (t('governance_trust.points', { returnObjects: true }) as any[]).map((p, i) => ({
            ...p,
            icon: mockAboutData?.governance_trust?.points[i]?.icon,
            color: mockAboutData?.governance_trust?.points[i]?.color
          }))
        }}
      />

    </main>
  );
};

export default About;

