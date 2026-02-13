import WhoWeAre from './components/WhoWeAre';
import OurJourney from './components/OurJourney';
import MissionVision from './components/MissionVision';
import OurAchievements from './components/OurAchievements';
import Milestones from './components/Milestones';
import GovernanceTrust from './components/GovernanceTrust';
import { mockAboutData } from './api/mockData';

const About = () => {
  return (
    <main className="min-h-screen bg-white pt-20">
      <WhoWeAre data={mockAboutData.whoWeAre} />
      <OurJourney data={mockAboutData.ourJourney} />
      <MissionVision data={mockAboutData.missionVision} />
      <OurAchievements data={mockAboutData.ourAchievements} />
      <Milestones data={mockAboutData.milestones} />
      <GovernanceTrust data={mockAboutData.governanceTrust} />
    </main>
  );
};

export default About;
