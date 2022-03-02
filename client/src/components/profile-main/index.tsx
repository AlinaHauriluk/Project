import { ProfileSection, ProfileTabs, ProfileTab } from './profile-main'
import { Container } from '../../box/absolute-box';
import { TabList, TabPanel } from 'react-tabs';
import ProfileOrder from '../profile-order';
import ProfileTestimonials from '../profile-testomonials';
import ProfileRating from '../profile-rating';

const ProfileMain = () => {
  return(
    <ProfileSection>
      <Container>
        <ProfileTabs>
          <TabList>
            <ProfileTab>Delivery your Order</ProfileTab>
            <ProfileTab>Your Friends</ProfileTab>
            <ProfileTab>Dishes Rating</ProfileTab>
            <ProfileTab>Your Tetimonials</ProfileTab>
          </TabList>

          <TabPanel>
            <ProfileOrder />
          </TabPanel>
          <TabPanel>
            <h3>Your friends</h3>
          </TabPanel>
          <TabPanel>
            <ProfileRating />
          </TabPanel>
          <TabPanel>
            <ProfileTestimonials />
          </TabPanel>
        </ProfileTabs>
      </Container>
    </ProfileSection>
  )
}

export default ProfileMain