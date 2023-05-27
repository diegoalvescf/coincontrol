import { PageComponent } from '../template/wrappers/PageComponent';
import { AdvantagesComponent } from './advantages/AdvantagesComponent';
import { FooterComponent } from './footer/FooterComponent';
import { HeaderComponent } from './header-external/HeaderComponent';
import { HighlightComponent } from './highlights/HighlightComponent';
import { TestimonialsComponent } from './testimonials/TestimonialsComponent';

export const LandingPage: React.FC = () => {
  return (
    <PageComponent external>
      <HeaderComponent />
      <HighlightComponent />
      <AdvantagesComponent />
      <TestimonialsComponent />
      <FooterComponent />
    </PageComponent>
  );
};
