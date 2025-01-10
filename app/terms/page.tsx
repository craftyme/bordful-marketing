import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Section className="pt-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <SectionHeader
                title="Terms of Service"
                description="Please read these terms carefully before using Bordful."
              />
              <div className="mt-2 text-sm text-muted-foreground">
                Last updated: January 10, 2025
              </div>
            </div>

            <div className="mt-16 space-y-10">
              <div className="space-y-4">
                <h2 className="text-xl font-medium">1. Acceptance of Terms</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By accessing and using Bordful, you agree to be bound by these
                  terms of service. If you disagree with any part of these
                  terms, you may not use our software.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">2. Use License</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bordful is open source software released under the MIT
                  License. You are free to:
                </p>
                <ul className="ml-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Modify and distribute the code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Use for commercial purposes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Sublicense and sell copies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Integrate with other software</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The only requirement is that the original copyright and
                  license notice must be included in all copies or substantial
                  portions of the software.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">
                  3. Your Responsibilities
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When using Bordful, you are responsible for:
                </p>
                <ul className="ml-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>Maintaining the security of your deployment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Complying with data protection laws in your jurisdiction
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Managing your own job board content and user data
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Ensuring proper use of third-party services (Airtable,
                      Vercel, etc.)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">4. Disclaimer</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bordful is provided &ldquo;as is&rdquo;, without warranty of
                  any kind, express or implied. We do not warrant that the
                  software will be error-free, uninterrupted, secure, or meet
                  your specific requirements. In no event shall the authors be
                  liable for any claim, damages, or other liability arising from
                  the use of the software.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">5. Limitations</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You may not use Bordful:
                </p>
                <ul className="ml-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>For any illegal purposes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>To violate any laws in your jurisdiction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>To infringe upon intellectual property rights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span>To transmit harmful code or malware</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">6. Third-Party Services</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bordful integrates with third-party services like Airtable and
                  Vercel. Your use of these services is subject to their
                  respective terms of service and privacy policies. We are not
                  responsible for the practices or policies of these third-party
                  services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">7. Revisions</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We may revise these terms of service at any time without
                  notice. By using Bordful you agree to be bound by the current
                  version of these terms of service. We recommend checking this
                  page periodically for changes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-medium">8. Contact</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If you have any questions about these terms, please contact us
                  at{" "}
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
