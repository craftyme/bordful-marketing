import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <Breadcrumbs className="mb-8" />
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <SectionHeader
                title="Privacy Policy"
                description="How we handle your data and protect your privacy."
              />
              <div className="mt-2 text-sm text-muted-foreground">
                Last updated: January 10, 2025
              </div>
            </div>

            <div className="mt-16 space-y-10">
              <div className="space-y-4">
                <h2 className="text-xl font-medium">1. Introduction</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This privacy policy explains how Bordful collects, uses, and
                  protects any information when you use our open-source job
                  board software. We&apos;re committed to ensuring your privacy
                  is protected.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">2. Data Collection</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As an open-source software, Bordful itself doesn&apos;t
                  collect any data. However, when you deploy your job board, you
                  may collect:
                </p>
                <ul className="ml-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Job listings and applications data in Airtable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Usage analytics (if you implement them)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>User submitted information</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">
                  3. Your Responsibilities
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When deploying Bordful, you are responsible for:
                </p>
                <ul className="ml-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Creating your own privacy policy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Complying with data protection laws in your jurisdiction
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Securing user data in your Airtable base</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Managing user consent and data rights</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">4. Third-Party Services</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bordful integrates with third-party services that may collect
                  data:
                </p>
                <ul className="ml-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Airtable - for storing job listings and applications
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Vercel - for hosting and analytics</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Please review their respective privacy policies to understand
                  how they handle data.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">5. Security</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  While we&apos;ve implemented security best practices in our
                  code, you are responsible for securing your deployment,
                  including:
                </p>
                <ul className="ml-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Keeping dependencies updated</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Configuring proper access controls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Protecting API keys and credentials</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">6. Updates</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We may update this privacy policy to reflect changes in our
                  software or legal requirements. We recommend checking this
                  page periodically for any changes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">7. Contact</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy, please
                  contact us at{" "}
                  <a
                    href="mailto:support@bordful.com"
                    className="text-primary hover:underline"
                  >
                    support@bordful.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
