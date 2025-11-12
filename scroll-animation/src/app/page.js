"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const stickyRef = useRef(null);
  const handContainerRef = useRef(null);
  const handRef = useRef(null);
  const handImageRef = useRef(null);
  const introRef = useRef(null);
  const h1ElementRef = useRef(null);
  const introCopyRef = useRef(null);
  const websiteContentRef = useRef(null);

  const introHeaders = [
    "<span>Your spa is</span> losing money",
    "<span>Empty slots</span> cost you",
    "<span>Time to</span> see the numbers",
    "<span>Time to</span> fix the gaps",
    "<span>Time to</span> fill your calendar",
  ];

  useGSAP(
    () => {
      let currentCycle = -1;
      let imageRevealed = false;

      const updateHeaderText = () => {
        if (h1ElementRef.current) {
          h1ElementRef.current.innerHTML =
            introHeaders[Math.min(currentCycle, introHeaders.length - 1)];
        }
      };

      const pinnedHeight = window.innerHeight * 8;

      ScrollTrigger.create({
        trigger: stickyRef.current,
        start: "top top",
        end: `+=${pinnedHeight}`,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;

          const rotationProgress = Math.min((progress * 8) / 5, 1);
          const totalRotation = rotationProgress * 1800 - 90;
          const rotationInCycle = ((totalRotation + 90) % 360) - 90;
          gsap.set(handContainerRef.current, { rotationZ: rotationInCycle });

          const newCycle = Math.floor((totalRotation + 90) / 360);
          if (
            newCycle !== currentCycle &&
            newCycle >= 0 &&
            newCycle < introHeaders.length
          ) {
            currentCycle = newCycle;
            updateHeaderText();

            if (newCycle === 3 && !imageRevealed) {
              gsap.to(handImageRef.current, { opacity: 1, duration: 0.3 });
              gsap.to(introCopyRef.current.querySelectorAll("p"), {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
              });
              imageRevealed = true;
            } else if (newCycle !== 3 && imageRevealed) {
              gsap.to(handImageRef.current, { opacity: 0, duration: 0.3 });
              gsap.to(introCopyRef.current.querySelectorAll("p"), {
                x: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
              });
              imageRevealed = false;
            }
          }

          if (progress <= 6 / 8) {
            const animationProgress = Math.max(0, (progress - 5 / 8) / (1 / 8));
            const newHeight = gsap.utils.interpolate(
              52.75,
              100,
              animationProgress
            );
            const newOpacity = gsap.utils.interpolate(1, 0, animationProgress);
            gsap.set(handRef.current, { height: `${newHeight}%` });
            gsap.set(introRef.current, { opacity: 1 });
            gsap.set(h1ElementRef.current, { opacity: newOpacity });
            gsap.set(h1ElementRef.current.querySelector("span"), {
              opacity: newOpacity,
            });
          } else {
            gsap.set(introRef.current, { opacity: 0 });
          }

          if (progress <= 7 / 8) {
            const scaleProgress = Math.max(0, (progress - 6 / 8) / (1 / 8));
            const newScale = gsap.utils.interpolate(1, 20, scaleProgress);
            gsap.set(handRef.current, { scale: newScale });
          }

          if (progress <= 7.5 / 8) {
            const opacityProgress = Math.max(0, (progress - 7 / 8) / (0.5 / 8));
            const newOpacity = gsap.utils.interpolate(1, 0, opacityProgress);
            gsap.set(handRef.current, { opacity: newOpacity });
          }

          if (progress > 7.5 / 8) {
            const revealProgress = (progress - 7.5 / 8) / (0.5 / 8);
            const newOpacity = gsap.utils.interpolate(0, 1, revealProgress);
            gsap.set(websiteContentRef.current, { opacity: newOpacity });
          } else {
            gsap.set(websiteContentRef.current, { opacity: 0 });
          }
        },
      });

      updateHeaderText();

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <>
      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}
      >
        <div className="container" ref={container}>
          <section className="sticky" ref={stickyRef}>
            <div className="hand-container" ref={handContainerRef}>
              <div className="hand" ref={handRef}>
                <img src="/portrait.jpg" alt="" ref={handImageRef} />
              </div>
            </div>

            <div className="intro" ref={introRef}>
              <h1 ref={h1ElementRef}>
                <span>Your spa is</span> losing money
              </h1>
              <div ref={introCopyRef}>
                <p>
                  Every empty slot in your calendar is revenue you didn't make.
                  Most spas lose 20-30% potential revenue to empty slots, bad pricing, and no-shows.
                </p>
                <p>
                  We show you the number. Then we show you how to fix it.
                  A small spa finds $3,000+ in lost revenue in the first month.
                </p>
              </div>
            </div>

            <div className="website-content" ref={websiteContentRef}>
              <h1>See what your spa could be making</h1>
              <p className="tagline">Your dashboard. Your data. Your profits.</p>
            </div>
          </section>
          <section className="about">
            <div className="content-section">
              <h2>What you get</h2>

              <div className="feature-grid">
                <div className="feature">
                  <h3>💰 Money you're leaving behind</h3>
                  <p>Every empty slot in your calendar is revenue you didn't make. We count them, show you the total, and tell you exactly when to run promotions to fill them.</p>
                </div>

                <div className="feature">
                  <h3>📊 What your time is actually worth</h3>
                  <p>Friday 5pm always booked? Charge more. Tuesday 2pm always empty? Drop the price 15%. We analyze demand patterns and tell you the optimal price for every time slot.</p>
                </div>

                <div className="feature">
                  <h3>💎 Which services make you money</h3>
                  <p>Your 60-minute facial makes $180/hour. Your 90-minute massage makes $133/hour. Simple math. We show you where to focus your energy.</p>
                </div>

                <div className="feature">
                  <h3>⏰ No-shows cost you real money</h3>
                  <p>8 people didn't show up last month. That's $1,200 gone. Automated reminders cut this by 40%. We track it and show you the savings.</p>
                </div>

                <div className="feature">
                  <h3>📱 Customers book themselves</h3>
                  <p>It's 11pm Saturday. Someone wants Monday 2pm. They book instantly. You wake up to the confirmation. No phone tag, no back-and-forth messages.</p>
                </div>

                <div className="feature">
                  <h3>📈 Real numbers, not vanity metrics</h3>
                  <p>We don't show you "engagement" or "impressions." We show you dollars lost and dollars gained. Revenue today, this week, this month.</p>
                </div>
              </div>

              <div className="pricing-section">
                <h2>Two ways to run this</h2>

                <div className="pricing-cards">
                  <div className="pricing-card">
                    <h3>Standard</h3>
                    <div className="price">$5,000</div>
                    <p>Booking system, analytics dashboard, automated reminders, custom website. You handle payments your way.</p>
                    <p className="perfect-for">Perfect for spas where customers prefer traditional payment methods.</p>
                  </div>

                  <div className="pricing-card premium">
                    <h3>Premium</h3>
                    <div className="price">$20,000</div>
                    <p>Everything above, plus instant online payments. Money hits your account in 2 days. No chasing payments.</p>
                    <p className="perfect-for">Includes deposits, tips, gift cards, customer portal. No-shows drop to near zero.</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <h2>The question isn't whether you're losing money.</h2>
                <p className="cta-text">You are. The question is: do you want to know how much, and what to do about it?</p>
                <p className="timeline">5-7 days from contract to live. Taking bookings while you sleep.</p>
              </div>
            </div>
          </section>
        </div>
      </ReactLenis>
    </>
  );
}
