"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Heart, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Memories", id: "#memories" },
    { name: "Qualities", id: "#qualities" },
    { name: "Special People", id: "#special-people" },
    { name: "Milestones", id: "#milestones" },
    { name: "Wishes", id: "#wishes" },
    { name: "Final Wishes", id: "#final-wishes" },
    { name: "Send Wishes", id: "#send-wishes" },
  ];

  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="noise"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      brandName="AJAY & BHAVIKA"
      navItems={navItems}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "sparkles-gradient"}}
      title="HAPPY BIRTHDAY"
      description="AJAY & BHAVIKA 🎉  \nMay your special day be filled with happiness, laughter, love, and unforgettable memories.  \nMay every moment of your life shine with success, positivity, and endless smiles. \\\n\\\nSome people make life more beautiful just by being in it.  \nToday is all about celebrating your happiness, your smile, and your beautiful journey. ✨ \\\n\\\nMay this new year of life bring peace, joy, success, and countless magical memories."
      buttons={[
        {
          text: "Celebrate the Moment",          href: "#memories"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-celebrating-new-years-eve_329181-13337.jpg",          imageAlt: "Elegant couple celebrating"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-positivity-couple-laying-together-back-happy-smiling-family-spanding-time-together-home-blonde-woman-blue-shirt-man-black-t-shirt-concept-love-happiness_132075-11732.jpg",          imageAlt: "Happy couple laughing"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-couple-relaxing-park-makes-selfie_1153-9700.jpg",          imageAlt: "Intimate couple portrait"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-fun-night_23-2149236926.jpg",          imageAlt: "Couple enjoying dinner"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-romantic-couple-hiking-together_23-2150889570.jpg",          imageAlt: "Couple at sunset"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/friends-concrete-blocks-looking-smartphone_23-2147724768.jpg",          imageAlt: "Couple by fireplace"},
      ]}
    />
  </div>

  <div id="memories" data-section="memories">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "memory-1",          name: "Joyful Journeys",          price: " ",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-cute-couple-nature_23-2148316004.jpg",          imageAlt: "Happy couple on vacation"},
        {
          id: "memory-2",          name: "Shared Laughter",          price: " ",          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-making-funny-grimaces_23-2150580865.jpg",          imageAlt: "Couple sharing a laugh"},
        {
          id: "memory-3",          name: "Celebratory Moments",          price: " ",          imageSrc: "http://img.b2bpic.net/free-photo/couple-sitting-couch-with-champagne-glasses_23-2147982045.jpg",          imageAlt: "Couple at a celebration"},
        {
          id: "memory-4",          name: "Cozy Comforts",          price: " ",          imageSrc: "http://img.b2bpic.net/free-photo/family-quarrel-kitchen-girl-with-angry-face-with-knife-surprised-guy-husband-wife-arguing-misunderstanding-broken-relationships-irritated-face-imitation-quarrel_197531-1613.jpg",          imageAlt: "Couple cooking together"},
        {
          id: "memory-5",          name: "Peaceful Strolls",          price: " ",          imageSrc: "http://img.b2bpic.net/free-photo/loving-couple-kissing-park_1153-938.jpg",          imageAlt: "Couple walking in a garden"},
        {
          id: "memory-6",          name: "Outdoor Bliss",          price: " ",          imageSrc: "http://img.b2bpic.net/free-photo/rose-vase-front-romantic-couple-sitting-together-restaurant_23-2147891127.jpg",          imageAlt: "Couple enjoying a picnic"},
      ]}
      title="Beautiful Memories We Cherish"
      description="A collection of precious moments and cherished memories that light up our lives. Every picture tells a story of joy, love, and togetherness. ✨"
    />
  </div>

  <div id="qualities" data-section="qualities">
      <FeatureCardSixteen
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Compassionate Spirit",          "Unwavering Resilience",          "Creative Brilliance"],
      }}
      positiveCard={{
        items: [
          "Harmonious Partnership",          "Generous Hearts",          "Infectious Laughter"],
      }}
      title="Your Wonderful Qualities"
      description="Celebrating the unique traits and beautiful spirit that make you both so special and loved by everyone around you. Your presence makes life brighter."
      animationType="slide-up"
    />
  </div>

  <div id="special-people" data-section="special-people">
      <TeamCardTen
      useInvertedBackground={false}
      title="Our Beloved Circle"
      tag="Special People in Your Life"
      membersAnimation="blur-reveal"
      members={[
        {
          id: "member-1",          name: "Loved One 1",          imageSrc: "http://img.b2bpic.net/free-photo/impressed-adult-slavic-man-with-winter-hat-scarf-around-his-neck-looking-front_141793-124652.jpg",          imageAlt: "Portrait of loved one 1"},
        {
          id: "member-2",          name: "Loved One 2",          imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-blonde-russian-girl-puts-hands-chest-looking-side-isolated-orange-background-with-copy-space_141793-65450.jpg",          imageAlt: "Portrait of loved one 2"},
        {
          id: "member-3",          name: "Loved One 3",          imageSrc: "http://img.b2bpic.net/free-photo/plus-size-women-s-white-sweater-mockup-psd-fashion-shoot_53876-153511.jpg",          imageAlt: "Portrait of loved one 3"},
        {
          id: "member-4",          name: "Loved One 4",          imageSrc: "http://img.b2bpic.net/free-photo/wise-man-posing-studio-side-view_23-2149883494.jpg",          imageAlt: "Portrait of loved one 4"},
      ]}
      memberVariant="card"
    />
  </div>

  <div id="milestones" data-section="milestones">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",          value: "Many",          description: "Years of Joy & Growth"},
        {
          id: "metric-2",          value: "Countless",          description: "Moments of Laughter"},
        {
          id: "metric-3",          value: "Endless",          description: "Adventures Together"},
      ]}
      title="Moments to Remember"
      description="Counting the blessings and milestones that have shaped your beautiful journey. Each number tells a story of growth, love, and shared happiness."
    />
  </div>

  <div id="wishes" data-section="wishes">
      <TestimonialCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "A Dear Friend",          role: "Friend",          company: "Circle of Love",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/tanned-young-lady-with-red-lips-sparkles-face-poses-outside-attractive-girl-white-dress-touches-hair-poses-balcony_197531-27967.jpg"},
        {
          id: "2",          name: "A Loving Family Member",          role: "Family",          company: "Heartfelt Bonds",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-cute-girl-joyfully-looking-camera-through-rainbow-colorful-background-isolated_574295-3090.jpg"},
        {
          id: "3",          name: "Another Cherished Friend",          role: "Friend",          company: "Joyful Memories",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-model-with-golden-light_23-2148905622.jpg"},
        {
          id: "4",          name: "A Close Confidante",          role: "Confidante",          company: "Trusted Circle",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-beautiful-woman-with-braids_23-2151429480.jpg"},
        {
          id: "5",          name: "A Well-Wisher",          role: "Well-Wisher",          company: "Good Vibes Only",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-woman_23-2149022640.jpg"},
      ]}
      title="Heartfelt Wishes from Loved Ones"
      description="Warm words and cherished memories shared by those who adore you most. Each message is a testament to the love and joy you bring into our lives."
      animationType="slide-up"
    />
  </div>

  <div id="final-wishes" data-section="final-wishes">
      <AboutMetric
      useInvertedBackground={false}
      title="Wishing you both a lifetime of happiness, love, success, and beautiful memories. Enjoy your special day to the fullest. 💖"
      metrics={[
        {
          icon: Heart,
          label: "Unconditional Love",          value: "∞"},
        {
          icon: Sparkles,
          label: "Endless Joy",          value: "Everyday"},
        {
          icon: Star,
          label: "Bright Future",          value: "Unlimited"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="send-wishes" data-section="send-wishes">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Send Your Personal Wishes"
      description="Leave a private, heartfelt message for Ajay & Bhavika. Your words of love and encouragement mean the world to them on their special day."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "subject",          type: "text",          placeholder: "Subject (e.g., Happy Birthday!)",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Your heartfelt message...",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/fantastic-garland-mother-s-day_23-2147612419.jpg"
      imageAlt="Elegant birthday celebration illustration"
      mediaAnimation="slide-up"
      mediaPosition="left"
      buttonText="Send Wish"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=g1eawz"
      logoAlt="AJAY & BHAVIKA Logo"
      logoText="AJAY & BHAVIKA"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
