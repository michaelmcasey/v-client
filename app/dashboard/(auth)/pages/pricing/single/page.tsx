"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  "Unlimited access to all courses",
  "Personalized learning paths",
  "Progress tracking and analytics",
  "Offline viewing on mobile app",
  "Certificate of completion",
  "24/7 customer support"
];

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, including Visa, MasterCard, American Express, and Discover. We also support PayPal for your convenience."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to the platform until the end of your current billing period."
  },
  {
    question: "Is there a limit to how many courses I can take?",
    answer:
      "No, there's no limit. With our Premium Plan, you have unlimited access to all courses on our platform. You can take as many courses as you like, at your own pace."
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "We offer a 7-day free trial for new users. This allows you to explore our platform and content before committing to a subscription. No credit card is required for the trial."
  },
  {
    question: "Are the courses downloadable for offline viewing?",
    answer:
      "Yes, our mobile app allows you to download courses for offline viewing. This feature is available for both iOS and Android devices."
  }
];

export default function Page() {
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPrice = 14.99;
  const annualPrice = 149.99;

  const currentPrice = isAnnual ? annualPrice : monthlyPrice;
  const savings = (((monthlyPrice * 12 - annualPrice) / (monthlyPrice * 12)) * 100).toFixed(0);

  return (
    <div className="lg:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4 space-y-2 lg:mb-6">
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
            Choose Your Learning Journey
          </h1>
          <p className="muted-foreground">
            Unlock a world of knowledge with our comprehensive e-learning platform
          </p>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              {/* Left side: Content */}
              <div className="p-6 md:w-2/3">
                <h2 className="mb-2 text-2xl font-bold">Pro Plan</h2>
                <p className="mb-6 text-muted-foreground">
                  Everything you need to master new skills
                </p>
                <ul className="mb-6 space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground">
                  All subscriptions come with a 30-day money-back guarantee. Cancel anytime.
                </p>
              </div>

              <div className="relative flex flex-col justify-center space-y-6 border-s p-6 md:w-1/3">
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-4xl font-bold">${currentPrice}</span>
                    <span className="ml-2 text-muted-foreground">
                      /{isAnnual ? "year" : "month"}
                    </span>
                  </div>

                  <div className="mb-6 flex items-center justify-center space-x-4">
                    <span
                      className={`text-sm font-medium ${!isAnnual ? "text-primary" : "text-muted-foreground"}`}>
                      Monthly
                    </span>
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={setIsAnnual}
                      aria-label="Toggle annual pricing"
                    />
                    <span
                      className={`text-sm font-medium ${isAnnual ? "text-primary" : "text-muted-foreground"}`}>
                      Annual
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full">Start Plan</Button>

                  {isAnnual && (
                    <Badge variant="success" className="absolute end-4 top-2">
                      Save {savings}%
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="my-6 text-center lg:my-12">
          <h2 className="mb-4 text-xl font-semibold">Why Choose Our Platform?</h2>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-medium">Comprehensive Library</h3>
                <p className="text-muted-foreground">
                  Access thousands of courses across various disciplines
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-medium">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals and thought leaders
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-medium">Flexible Learning</h3>
                <p className="text-muted-foreground">
                  Study at your own pace, anytime and anywhere
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-start">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}