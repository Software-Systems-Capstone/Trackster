import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // to navigate after registration
import './InfoPage.css'; // Your styles

function CalculateTDEE() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [caloricMaintenance, setCaloricMaintenance] = useState(null);

    const calculateTDEE = () => {
        const weightFloat = parseFloat(weight);
        const heightFloat = parseFloat(height);
        const ageInt = parseInt(age);

        if (isNaN(weightFloat) || isNaN(heightFloat) || isNaN(ageInt) || !gender || !activityLevel) {
            alert('Please fill in all fields.');
            return;
        }

        let BMR;
        if (gender === 'male') {
            BMR = 10 * weightFloat + 6.25 * heightFloat - 5 * ageInt + 5;
        } else {
            BMR = 10 * weightFloat + 6.25 * heightFloat - 5 * ageInt - 161;
        }

        const activityFactors = {
            sedentary: 1.2,
            lightlyActive: 1.375,
            moderatelyActive: 1.55,
            veryActive: 1.725,
            extraActive: 1.9
        };

        // Calculate three different values for bulk, maintain, and cutting
        const TDEE = BMR * activityFactors[activityLevel];
        const minus500 = (TDEE - 500).toFixed(0);
        const plus500 = (TDEE + 500).toFixed(0);

        setCaloricMaintenance({
            minus500: minus500,
            original: TDEE.toFixed(0),
            plus500: plus500
        });
    };

    return (
        <div>
            <label>
                Weight (kg):
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </label>
            <br />
            <label>
                Height (cm):
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </label>
            <br />
            <label>
                Age (years):
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <br />
            <label>
                Gender:
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
            <br />
            <label>
                Activity Level:
                <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                    <option value="">Select</option>
                    <option value="sedentary">Sedentary</option>
                    <option value="lightlyActive">Lightly Active</option>
                    <option value="moderatelyActive">Moderately Active</option>
                    <option value="veryActive">Very Active</option>
                    <option value="extraActive">Extra Active</option>
                </select>
            </label>
            <br />
            <button onClick={calculateTDEE}>Calculate TDEE</button>

            {caloricMaintenance && <p>Your caloric maintenance is approximately {caloricMaintenance} calories per day.</p>}
        </div>
    );
}

function ScrollBasedOnUserInput() {
    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Section with id "${sectionId}" not found.`);
        }
    }

    return (
        <div>
            {/* Buttons for user to choose options */}
            <button onClick={() => scrollToSection("bulk")}>Bulking</button>
            <button onClick={() => scrollToSection("cut")}>Cutting</button>
            <button onClick={() => scrollToSection("maintain")}>Maintaining</button>

            {/* Sections of the page */}
            <div id="bulk" className="section">
                <p>Here is some information about Bulking.</p>
                <a href="https://www.youtube.com/watch?v=8BKbu_s8p1Q" target="_blank" rel="noopener noreferrer">
                    <img src="VIDEO_THUMBNAIL_URL_1" alt="Jeff Nippard Bulking Guide" />
                </a>
                <p>During a weight gain, or bulking, phase, make sure to eat plenty of protein and other clean sources.</p>
            </div>

            <div id="cut" className="section">
                <p>Here is some information about Cutting.</p>
                <a href="https://www.youtube.com/watch?v=roHQ3F7d9YQ" target="_blank" rel="noopener noreferrer">
                    <img src="VIDEO_THUMBNAIL_URL_1" alt="Jeff Nippard Cutting Guide" />
                </a>
                <p>During a weight loss, or cutting, phase, make sure to eat plenty of protein and other clean sources while also staying under your caloric maintenance.</p>
            </div>

            <div id="maintain" className="section">
            <p>Here is some information about Cutting.</p>
                <a href="https://www.youtube.com/watch?v=P0vHR2mAw2U" target="_blank" rel="noopener noreferrer">
                    <img src="VIDEO_THUMBNAIL_URL_1" alt="Jeff Nippard Maintaining Guide" />
                </a>
                <p>During a maintain, or maintenance, phase, make sure to eat plenty of protein and perform some form of basic exersice to keep muscle.</p>
            </div>
        </div>
    );
}

const InfoPage = () => {
    return (
        <div>
            <CalculateTDEE />
            <ScrollBasedOnUserInput />
        </div>
    );
};

export default InfoPage;
