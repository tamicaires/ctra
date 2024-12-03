import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import eventobjj from "@/assets/eventoBjj.png";
import eventoNordestePan from "@/assets/evento-nordeste-pan.png";
import eventoTainan from "@/assets/evento-tainan.png";

interface PriceCategory {
  kids?: number;
  adult?: number;
  single?: number;
}

interface Batch {
  number: number;
  price: PriceCategory;
  endDate: string;
}

interface TournamentProps {
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  imageUrl: string;
  isOpen: boolean;
  eventType: "tournament" | "seminar";
  prices?: {
    gi?: PriceCategory;
    nogi?: PriceCategory;
  };
  batches?: Batch[];
}

export default function TournamentCards() {
  const tournaments: TournamentProps[] = [
    {
      title: "Campeonato Interno de Jiu-Jitsu",
      subtitle: "GI-NOGI",
      date: "15 de JULHO DE 2024",
      location: "GINÁSIO",
      imageUrl: eventobjj,
      isOpen: false,
      eventType: "tournament",
      prices: {
        gi: { kids: 80.0, adult: 95.0 },
        nogi: { kids: 75.0, adult: 80.0 },
      },
    },
    {
      title: "Nordeste Panamericano",
      subtitle: "GI-NOGI",
      date: "19 de Janeiro de 2025",
      location: "EM BREVE",
      imageUrl: eventoNordestePan,
      isOpen: true,
      eventType: "tournament",
      prices: {
        gi: { kids: 80.0, adult: 95.0 },
        nogi: { kids: 75.0, adult: 80.0 },
      },
    },
    {
      title: "Seminário com Tainan Dalpra",
      subtitle: "GI-NOGI",
      date: "08 de DEZEMBRO, 2024",
      location: "Mazilli Sports",
      imageUrl: eventoTainan,
      isOpen: true,
      eventType: "seminar",
      batches: [
        {
          number: 1,
          price: { single: 100.0 },
          endDate: "15 de NOVEMBRO, 2024",
        },
        {
          number: 2,
          price: { single: 150.0 },
          endDate: "06 de DEZEMBRO, 2024",
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
            Participe dos Melhores Torneios e Eventos de Jiu-Jitsu
          </h2>
          <p className="text-xl mb-8">
            Inscreva-se agora e desafie-se nos tatames mais competitivos da
            Região!
          </p>
          <Button size="lg" className="text-lg px-8 py-3 bg-white text-black">
            Ver Todos os Eventos
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden border bg-zinc-50 border-gray-200 rounded-lg shadow-md"
            >
              <div className="relative">
                <img
                  src={tournament.imageUrl}
                  alt={tournament.title}
                  className="w-full h-[24rem] object-cover"
                />
                <Badge
                  className={`absolute top-4 right-4 ${
                    tournament.isOpen ? "bg-green-500" : "bg-red-500"
                  } text-white px-2 py-1 text-xs font-semibold rounded-full`}
                >
                  {tournament.isOpen ? "INSCRIÇÕES ABERTAS" : "ENCERRADO"}
                </Badge>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl text-black font-semibold mb-2">
                    {tournament.title}
                  </h3>
                  <div className="flex justify-between">
                    <p className="text-gray-600 mb-4">{tournament.subtitle}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      <p>{tournament.date}</p>
                      <p>{tournament.location}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {tournament.eventType === "tournament" &&
                      tournament.prices && (
                        <>
                          {tournament.prices.gi && (
                            <PriceSection
                              title="GI"
                              prices={tournament.prices.gi}
                            />
                          )}
                          {tournament.prices.nogi && (
                            <PriceSection
                              title="NOGI"
                              prices={tournament.prices.nogi}
                            />
                          )}
                        </>
                      )}
                    {tournament.eventType === "seminar" &&
                      tournament.batches && (
                        <BatchesSection batches={tournament.batches} />
                      )}
                  </div>
                </div>

                <Button
                  className="w-full mt-6"
                  variant={tournament.isOpen ? "default" : "secondary"}
                  disabled={!tournament.isOpen}
                >
                  {tournament.isOpen ? "Inscrever-se" : "Inscrições Encerradas"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function PriceSection({
  title,
  prices,
}: {
  title: string;
  prices: PriceCategory;
}) {
  return (
    <div className="bg-gray-100 rounded-lg p-3 text-black">
      <h4 className="text-sm font-semibold mb-2">
        {title} - INSCRIÇÕES LOTE ÚNICO
      </h4>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {prices.kids && <div>KIDS: R$ {prices.kids.toFixed(2)}</div>}
        {prices.adult && <div>ADULTO: R$ {prices.adult.toFixed(2)}</div>}
      </div>
    </div>
  );
}

function BatchesSection({ batches }: { batches: Batch[] }) {
  return (
    <div className="bg-gray-100 rounded-lg p-3 text-black">
      <h4 className="text-sm font-semibold mb-2">LOTES</h4>
      {batches.map((batch, index) => (
        <div key={index} className="mb-2 last:mb-0">
          <p className="text-sm font-medium">Lote {batch.number}</p>
          <p className="text-sm">Preço: R$ {batch.price.single?.toFixed(2)}</p>
          <p className="text-xs text-gray-600">Até {batch.endDate}</p>
        </div>
      ))}
    </div>
  );
}
