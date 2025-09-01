import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function MainContent() {
  const partnerOrganizations = [
    {
      title: "Fund for Social Protection of Persons with Disabilities",
      color:
        "bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)]",
      textColor: "text-white",
    },
    {
      title: "Ministry of Social Policy of Ukraine",
      color: "bg-gradient-to-br from-[var(--brand-primary-20)] to-purple-100",
      textColor: "text-[var(--brand-primary)]",
    },
    {
      title: "Government Portal",
      color: "bg-gradient-to-br from-[var(--brand-primary)] to-purple-700",
      textColor: "text-white",
      subtitle: "Unified web portal of Ukraine's executive authorities",
    },
    {
      title: "President of Ukraine",
      color: "bg-gradient-to-br from-yellow-100 to-[var(--brand-primary-20)]",
      textColor: "text-[var(--brand-primary)]",
      subtitle: "Official Internet Representation",
    },
    {
      title: "Verkhovna Rada of Ukraine",
      color:
        "bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)]",
      textColor: "text-white",
      subtitle: "Official web portal of the Parliament of Ukraine",
    },
    {
      title: "prozorro",
      color: "bg-gradient-to-br from-white to-[var(--brand-primary-10)]",
      textColor: "text-[var(--brand-primary)]",
      subtitle: "Public procurement",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Section */}
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-r from-[#7a97e3]/10 via-purple-50 to-violet-50 dark:from-[#7a97e3]/20 dark:via-purple-900/20 dark:to-violet-900/20">
        <CardHeader>
          <CardTitle className="text-xl text-[#7a97e3]">
            Dear friends!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Welcome to the website of the All‑Ukrainian Union of Public
            Organizations &quot;Confederation of Organizations of Persons with
            Disabilities of Ukraine&quot;. The creation of this resource is a
            necessary and purposeful step to provide information and
            consultation support to people with special needs.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The Internet is an integral part of the disability movement
            worldwide. We have paid special attention to this process. Today we
            are making another step aimed at improving communication and the
            exchange of information among people with disabilities across
            Ukraine and beyond. We hope our resource will become a helpful
            source of relevant and interesting information.
          </p>
        </CardContent>
      </Card>

      {/* Partner Organizations Grid */}
      <div>
        <h2 className="text-xl text-[var(--brand-primary)] mb-6">
          Partner organizations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerOrganizations.map((org, index) => (
            <Card
              key={index}
              className={`${org.color} shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer group`}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center text-center min-h-[120px]">
                <h3 className={`text-lg ${org.textColor} mb-2`}>{org.title}</h3>
                {org.subtitle && (
                  <p className={`text-sm ${org.textColor} opacity-80`}>
                    {org.subtitle}
                  </p>
                )}
                <ExternalLink
                  className={`h-4 w-4 ${org.textColor} mt-2 opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <Card className="shadow-lg border-[#7a97e3]/30 bg-gradient-to-r from-[#7a97e3]/10 to-purple-50 dark:from-[#7a97e3]/20 dark:to-purple-900/20">
        {" "}
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-[#7a97e3]/20 to-purple-100 dark:from-[#7a97e3]/30 dark:to-purple-800/30 text-[#7a97e3]"
            >
              Інформація
            </Badge>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Our organization works to improve the lives of people with
            disabilities in Ukraine through the development of public
            initiatives, protection of human rights and the creation of equal
            opportunities for all citizens.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
