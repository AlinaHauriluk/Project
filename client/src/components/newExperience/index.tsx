import React, {useEffect} from "react";
import { FlexContainer, Flex} from "../../box/flexBox";
import { SectionNewExperience, NewExperienceImage, NewExperienceImageTwo, NewExperienceDescription, NewExperienceSubTitle, NewExperienceTitle, NewExperienceText } from "./newExperience";
import AOS from 'aos'
import "aos/dist/aos.css";

const NewExperience = () => {
    
    useEffect(() => {
        
        AOS.init({ duration : 2000});
        
    }, []);

    return(
        <SectionNewExperience>
            <FlexContainer data-aos='fade-down'>
                <Flex>
                    <NewExperienceImage/>
                    <NewExperienceImageTwo />
                </Flex>

                <NewExperienceDescription>
                    <NewExperienceSubTitle>Something new</NewExperienceSubTitle>
					<NewExperienceTitle>An Extraordinery Experience</NewExperienceTitle>
					<NewExperienceText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla consequat fringilla massa.</NewExperienceText>
                </NewExperienceDescription> 
            </FlexContainer>
        </SectionNewExperience>
    )
}

export default NewExperience