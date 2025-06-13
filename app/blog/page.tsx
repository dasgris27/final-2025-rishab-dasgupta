import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";

import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <>
      <h1 className={title()}>Blog</h1>
      <p>
        Welcome to my blog. Here you can find all of the latest news about the
        projects I have been working on, and other things that are going on in
        my life.
      </p>
      <Divider className="my-8" />
      <div className="flex gap-2 md:gap-4 md:items-center flex-col md:flex-row mb-4 md:mb-0">
        <h2 className={title({ size: "sm" })} id="ela-struggles">
          Struggles in Language Arts
        </h2>
        <div className="flex gap-2">
          <Chip>Educational</Chip>
          <Chip>Professional</Chip>
          <Chip>Teaser</Chip>
        </div>
      </div>
      <p className="mb-2 opacity-75">June 11, 2025</p>
      <p className="mb-2">
        As you might already know, it is nearing the end of the school year,
        which might sound really fun. I mean, summer is coming soon, a
        well-deserved break is approaching, and I can kiss goodbye to all that
        annoying homework, right? Well, it turns out that this is the prime time
        for teachers to just squeeze in huge, unbelievably large projects that
        make you think &quot;Man, I just want school to be over already.&quot;
        It is no different in my English class, where we have to make a project
        on contemporary issues, where we not only have to do literary analysis
        on basically everything about some movie, but also make a &quot;creative
        piece&quot; to &quot;show our understanding,&quot; as if I haven&apos;t
        shown it already with the seven pages I have written. This is actually
        getting so ridiculous at this point.
      </p>
      <p>
        Because of all this work given to me, you might not see me working on
        any projects for the next few weeks, but I promise, when I share my next
        project with all of you, you will be fantastically surprised. I&apos;m
        not going to tell you exactly what I am planning, but I promise that it
        will be fun and interactive. I&apos;ll give you a four-word hint as to
        what it is: <span className="font-bold">make your own pages</span>.
      </p>
      <Divider className="my-8" />
      <div className="flex gap-2 md:gap-4 md:items-center flex-col md:flex-row mb-4 md:mb-0">
        <h2 className={title({ size: "sm" })} id="starting-portfolio">
          Starting My Portfolio
        </h2>
        <div className="flex gap-2">
          <Chip>Website</Chip>
          <Chip>Project</Chip>
          <Chip>Programming</Chip>
        </div>
      </div>
      <p className="mb-2 opacity-75">June 9, 2025</p>
      <p>
        Hello, this is the first blog post that I am writing on my portfolio, to
        announce that I am finally working on my portfolio to showcase my work
        to others. I am currently having a little bit of trouble thinking of
        what to write on my main page, but otherwise it is going pretty well so
        far. I hope I can get to a decent point by Friday. I cannot wait for all
        of you to see the final product!
      </p>
      <Divider className="my-8" />
    </>
  );
}
