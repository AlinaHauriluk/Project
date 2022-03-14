import { ProfileSection, ProfileTabs, ProfileTab } from './profile-main'
import { Container } from '../../box/absolute-box';
import { TabList, TabPanel } from 'react-tabs';
import ProfileOrder from '../profile-order';
import ProfileTestimonials from '../profile-testomonials';
import ProfileFollowers from '../profile-followers';
import ProfileRating from '../profile-rating';

const ProfileMain = () => (
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
            <ProfileFollowers />
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

export default ProfileMain