import React, { useState } from 'react';

interface SkillsInputProps {
    onSkillsChange?: (skills: string[]) => void;
}

export default function SkillsInput({ onSkillsChange }: SkillsInputProps) {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const skills = ['frontend', 'backend', 'design', 'product'];

    const handleSkillChange = (skill: string, checked: boolean) => {
        const updatedSkills = checked
            ? [...selectedSkills, skill]
            : selectedSkills.filter(s => s !== skill);
        
        setSelectedSkills(updatedSkills);
        onSkillsChange?.(updatedSkills);
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
                        onChange={(e) => handleSkillChange(skill, e.target.checked)}
                    />
                    {skill}
                </label>
                </div>
            ))}
        </div>
    );
};