import { useState } from 'react';

interface SkillsInputProps {
    onSkillsChange: (skills: string[]) => void;
}

export default function SkillsInput({ onSkillsChange }: SkillsInputProps) {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const skills = ['frontend', 'backend', 'design', 'product'];

    const onSkillSelectionChange = (skill: string, checked: boolean) => {
        let updatedSkills: string[];
        if (checked) {
            updatedSkills = [...selectedSkills, skill];
        } else {
            updatedSkills = selectedSkills.filter(s => s !== skill);
        }
        setSelectedSkills(updatedSkills);
        onSkillsChange(updatedSkills);
    };

    return (
        <div className="skills-input">
            <h3>Skills</h3>
            {skills.map(skill => (
                <div key={skill}>
                    <label className="skill-checkbox">
                    <input
                        type="checkbox"
                        checked={selectedSkills.includes(skill)}
                        onChange={(e) => onSkillSelectionChange(skill, e.target.checked)}
                    />
                    {skill}
                </label>
                </div>
            ))}
        </div>
    );
};