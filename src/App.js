import './App.css';
import Header from './components/header';
import GeneralInformation from './components/general';
import EducationExperience from './components/education';
import ExperienceInformation from './components/experience';
import Skills from './components/skills';
import Achievements from './components/achievements';

function App() {
  	return (
    	<div className='App'>
            <Header />
    		<div className='content'>
                <div className='left-column'>
                    <GeneralInformation />
                    <EducationExperience />
                </div>
                <div className='right-column'>
                    <ExperienceInformation />
                    <Skills />
                    <Achievements />
                </div>
      		</div>
    	</div>
  	);
}

export default App;
