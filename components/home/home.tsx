"use client";

import { PageWrapper } from "../ui/page-wrapper";
import { Hero } from "./hero";
import { Services } from "./services";
import { Testimonials } from "./testimonials";
import { Gallery } from "./gallery";
import { Location } from "./location";

const Index = () => {
    return (
        <PageWrapper>
            <Hero />
            <Services />
            <Testimonials />
            <Gallery />
            <Location />
        </PageWrapper>
    );
};

export default Index;
