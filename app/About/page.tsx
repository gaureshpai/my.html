import React from 'react';
import '@/public/styles/globals.css';

const About = () => {
    const aboutText = `Tinnitus is the perception of noise or ringing in the ears.
    It is a common problem, affecting about 15 to 20 percent of people.
    Tinnitus isn't a condition itself — it's a symptom of an underlying condition, such as age-related hearing loss, ear injury, or a circulatory system disorder.
    Tinnitus can be perceived in one or both ears or in the head.
    The sound may be soft or loud, low pitched or high pitched and can vary over time.
    Tinnitus can be incredibly disruptive to daily life, causing stress, sleep disturbances, and concentration problems.
    For many people with tinnitus, music literally plays a pivotal role in offering an easy escape from the annoyance of listening to tinnitus.
    In the last few years, listening options have expanded and prices have equalized among most large streaming services that grant access to a vast selection of songs and sounds for approximately $10 per month.
    Which streaming service is best depends on the music and benefits that appeal to you.
    Fortunately, most services offer a free option or free trial period, which allows you to explore the services and quality of sound before subscribing.`;

    const formattedText = aboutText.split('. ').map((sentence, index) => (
        <div key={index} className="my-2">
            {sentence.trim()}{index < aboutText.split('. ').length - 1 && '.'}
        </div>
    ));

    return (
        <div className="mainbodyy bg-white p-8 overflow-auto">
            <h1 className="text-4xl mb-4">About Tinnitus</h1>
            <div className="about mb-8 flex flex-wrap">
                <div className="text-lg leading-relaxed flex-basis-full md:flex-basis-70 md:max-w-70">
                    {formattedText}
                </div>
                <div className="photo-and-reference md:ml-auto md:mr-0">
                    <img src="/images/tin.jpg" alt="Tinnitus" className="tinnitus-image mb-2" />
                    <p className="reference text-sm">
                        Source: <a href="https://www.ata.org/about-tinnitus/sound-therapy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Sound Therapy</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
