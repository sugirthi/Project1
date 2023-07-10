"use client"
import React, { useEffect, useRef } from 'react';

interface ParallaxScrollProps {
  layer1Id: string;
  layer2Id: string;
  layer3Id: string;
  layer4Id: string;
}

const ParallaxScroll: React.FC<ParallaxScrollProps> = ({ layer1Id, layer2Id, layer3Id, layer4Id }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const layer1 = document.getElementById(layer1Id);
    const layer2 = document.getElementById(layer2Id);
    const layer3 = document.getElementById(layer3Id);
    const layer4 = document.getElementById(layer4Id);

    let observer: IntersectionObserver;

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      });
    };

    observer = new IntersectionObserver(handleIntersect);
    if (container) {
      observer.observe(container);
    }

    const handleScroll = () => {
      if (container && layer1 && layer2 && layer3 && layer4) {
        const containerTop = container.getBoundingClientRect().top;
        let value = containerTop - window.innerHeight / 2;

        layer1.style.left = `${value * 1.8}px`;
        layer2.style.right = `${value * 0.4}px`;
        layer3.style.right = `${value * 1.8}px`;
        layer4.style.left = `${value * 0.4}px`;
      }
    };

    return () => {
      if (observer && container) {
        observer.unobserve(container);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [layer1Id, layer2Id, layer3Id, layer4Id]);

  return (
    <div ref={containerRef} style={{ height: '150px', overflow: 'hidden' }}>
      <footer className="bg-gray-300 text-[#351C75] p-6">
        <div>
          <h2 className="text-xl font-bold">Abluva</h2>
          <p className="mt-2">123 abc Street, City, Country</p>
          <p>info@abluva.com</p>
        </div>
        <div className="mt-4 text-center">
          &copy;2023-Abluva-All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ParallaxScroll;
