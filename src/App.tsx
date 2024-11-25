import  {Layout} from '@/components/layout/Layout';
import ComparisonSection from '@/components/sections/ComparisonSection';
import  FeaturesSection  from '@/components/sections/FeaturesSection';
import FAQSection  from '@/components/sections/FAQSection';
import  Footer  from '@/components/layout/Footer';

export default function Home() {
  return (
    <Layout>
      <ComparisonSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </Layout>
  );
}