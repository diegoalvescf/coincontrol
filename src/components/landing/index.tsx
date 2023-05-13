import { PageComponent } from '../template/PageComponent';
import { AdvantagesComponent } from './advantages/AdvantagesComponent';
import { FooterComponent } from './footer/FooterComponent';
import { HeaderComponent } from './header/HeaderComponent';
import { HighlightComponent } from './highlights/HighlightComponent';
import { TestimonialsComponent } from './testimonials/TestimonialsComponent';

export const LandingPage: React.FC = () => {
  return (
    <PageComponent>
      <HeaderComponent />
      <HighlightComponent />
      <AdvantagesComponent />
      <TestimonialsComponent />
      <FooterComponent />
    </PageComponent>
  );
};
