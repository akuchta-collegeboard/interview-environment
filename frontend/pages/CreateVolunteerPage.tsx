import React, { useState } from 'react';
import { Volunteer } from '../../backend/database';
import SkillsInput from '../components/SkillsInput';

export function CreateVolunteerPage() {
    const [formData, setFormData] = useState<Volunteer>({} as Volunteer);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // API call to create Volunteer
            await fetch('/api/volunteers', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            setIsSubmitted(true);
            setFormData({} as Volunteer);
        } catch (error) {
            console.error('Error creating Volunteer:', error);
        } finally {
            
        }
    };

    return (
        <div >
            <h2>Create New Volunteer</h2>
            {isSubmitted && <p>Submitted.</p>}
            {!isSubmitted && <form method="post" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Volunteer Name:</label>
                    <input type='text' name='name' placeholder='Volunteer Name' onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor='availability'>Available Date:</label>
                    <input type='date' name='availability' placeholder='Available Date' onChange={handleInputChange}/>
                </div>
                <SkillsInput onSkillsChange={(skills) => setFormData(prev => ({ ...prev, skills }))} />
                <button type="submit">
                    Create Volunteer
                </button>
            </form>}
        </div>
    );
};

export default CreateVolunteerPage;