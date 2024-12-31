import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  difficulty: string;
  timeCommitment: string;
  link?: string;
}

export const ResourceCard = ({ 
  title, 
  description, 
  category, 
  difficulty, 
  timeCommitment,
  link 
}: ResourceCardProps) => {
  const cardRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      });
    }
  }, [inView]);

  const handleVisitResource = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div ref={ref}>
      <Card 
        ref={cardRef} 
        className="card-hover opacity-0 translate-y-4"
      >
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <Badge variant="secondary">{category}</Badge>
          </div>
          <div className="flex gap-2 mt-2">
            <Badge variant="outline">{difficulty}</Badge>
            <Badge variant="outline">{timeCommitment}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground mb-4">
            {description}
          </CardDescription>
          {link && (
            <Button 
              variant="outline" 
              className="w-full mt-2 gap-2"
              onClick={handleVisitResource}
            >
              Visit Resource
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};