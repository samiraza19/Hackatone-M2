import React from 'react'
import Card1 from '../components/Card1'
import Carusoel from '../components/Carousel'
import Footer from '../components/Footer/Footer'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Card4 from '../components/Card4'
import Card5 from '../components/Card5'
import Card6 from '../components/Card6'
import Card7 from '../components/card7'
import { Card } from '@mui/material'
import Card8 from '../components/Card8'

const Donor = () => {
  return (
    <>
    <div>
      <Carusoel />
      <br />
      <h1>List Of Donators:</h1>
      <hr />
      <Card sx={{ display: 'flex', mx: '2px',flexWrap:'wrap' }}>
      <Card1  />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      </Card>
      <br />
      <h1>Message of Appreciation for Blood Donors:</h1>
      <p>Dear Blood Donors,

We want to take a moment to express our deepest gratitude for your selfless act of donating blood. Your generosity and compassion are truly remarkable, and they make an immense difference in the lives of those in need. Every drop of blood you donate has the power to save lives, and your willingness to give without expecting anything in return is nothing short of inspiring.

Thanks to you, countless individuals have a chance at a brighter tomorrow. Whether it's someone undergoing surgery, a patient battling cancer, or an accident victim in critical condition, your donation provides hope and healing when it's needed most. Your kindness doesn't go unnoticed, and your contribution leaves an indelible mark on the lives you touch.

Please know that your actions ripple far beyond the donation site. You're not just giving blood; you're giving hope, comfort, and a chance for someone to continue their journey. Your altruism embodies the very essence of humanity, and for that, we are profoundly grateful.

Thank you for being a beacon of hope and making the world a better place, one donation at a time.

With heartfelt appreciation,
[Red Proud Blood Bank Organization]</p>
<hr />
<br />
<h1>Message of Reassurance for Those Scared from Donating Blood:
</h1>
<p>Dear Friends,

We understand that being around others can sometimes be daunting, especially if you're feeling anxious or overwhelmed. But please know that you're not alone in your feelings, and it's okay to take things at your own pace. Your well-being is paramount, and it's important to prioritize self-care above all else.

It's perfectly normal to feel apprehensive about social situations, and there's no rush to push yourself beyond your comfort zone. Take small steps, and remember that it's okay to set boundaries and take breaks when needed. Surround yourself with supportive individuals who understand and respect your needs, and don't hesitate to communicate your feelings with them.

You're stronger than you realize, and you have the power to overcome any challenges that come your way. Trust in yourself, and believe that you are capable of navigating through difficult moments. You have a unique light within you that shines brightly, even in the darkest of times.

So, take a deep breath, and know that you are loved and valued just as you are. You don't have to face your fears alone, and there are people who care about you and want to see you thrive. You have a beautiful journey ahead, filled with endless possibilities, and we're here to support you every step of the way.

With warmth and understanding,
[Red Proud Blood Bank Organization ]






</p>

      <Footer />
    </div>
    </>
  )
}

export default Donor