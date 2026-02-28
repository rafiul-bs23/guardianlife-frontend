import WhoWeAre from './components/WhoWeAre';
import OurJourney from './components/OurJourney';
import MissionVision from './components/MissionVision';
import OurAchievements from './components/OurAchievements';
import Milestones from './components/Milestones';
import GovernanceTrust from './components/GovernanceTrust';
import AboutHeader from './components/AboutHeader';
import { useAboutHeader } from './hooks/useAboutHeader';
import { useAboutDynamic } from './hooks/useAboutDynamic';
import { mockAboutData } from './api/mockData';

const About = () => {
  const { data: headerData, isLoading: isHeaderLoading } = useAboutHeader('about');
  const { data: dynamicData } = useAboutDynamic();

  return (
    <main className="min-h-screen bg-white">
      {!isHeaderLoading && headerData && <AboutHeader data={headerData} />}
      <WhoWeAre data={mockAboutData?.who_we_are} />
      <OurJourney data={mockAboutData?.our_journey} />
      <MissionVision data={mockAboutData?.mission_vision} />

      {/* Dynamic Overrides where available */}
      <OurAchievements
        data={{
          ...mockAboutData?.our_achievements,
          achievements: dynamicData?.awards?.length ? dynamicData.awards.map(a => ({ title: a.name, subtitle: a.description })) : mockAboutData?.our_achievements?.achievements
        } as any}
      />
      <Milestones
        data={{
          ...mockAboutData?.milestones,
          milestones: dynamicData?.milestones?.length ? dynamicData.milestones : mockAboutData?.milestones?.milestones
        } as any}
      />

      <GovernanceTrust data={mockAboutData?.governance_trust} />
    </main>
  );
};

export default About;
