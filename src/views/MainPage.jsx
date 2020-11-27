import React from 'react';
import Hero from '../components/Hero/Hero';
import ComplaintSection from '../components/ComplaintSection/ComplaintSection';
import BaseLayout from '../layouts/BaseLayout';
import MainPageNews from '../components/MainPageNews/MainPageNews'

export default function MainPage() {
  return (
    <BaseLayout>
      <Hero/>
      <MainPageNews />
      <ComplaintSection/>
    </BaseLayout>
  )
}
