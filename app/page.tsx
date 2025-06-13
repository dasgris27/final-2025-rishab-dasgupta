"use client";

import { Phone, AtSign, Github, ArrowRight, ChevronDown } from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row gap-4">
        <Dropdown className="lg:hidden w-full">
          <DropdownTrigger>
            <Button className="lg:hidden">
              <span>View Table of Contents</span>
              <ChevronDown />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="profile" href="#profile">
              Profile and Contact Info
            </DropdownItem>
            <DropdownItem key="work-experience" href="#work-experience">
              Work Experience
            </DropdownItem>
            <DropdownItem key="notable-projects" href="#notable-projects">
              Notable Projects
            </DropdownItem>
            <DropdownItem key="coding-history" href="#coding-history">
              History with Coding
            </DropdownItem>
            <DropdownItem key="future-goals" href="#future-goals">
              Goals for the Future
            </DropdownItem>
            <DropdownItem
              key="future-courses"
              className="ml-4 w-[calc(100%-1rem)]"
              href="#future-courses"
            >
              Courses I Plan to Take
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className="w-64 h-full flex-shrink-0 sticky top-16 self-start p-2 hidden lg:block">
          <h3 className={subtitle()}>Table of Contents</h3>
          <p>
            <Link href="#profile">Profile and Contact Info</Link>
          </p>
          <p>
            <Link href="#work-experience">Work Experience</Link>
          </p>
          <p>
            <Link href="#notable-projects">Notable Projects</Link>
          </p>
          <p>
            <Link href="#coding-history">History with Coding</Link>
          </p>
          <p>
            <Link href="#future-goals">Goals for the Future</Link>
          </p>
          <p className="indent-2">
            <Link href="#future-courses">Courses I Plan to Take</Link>
          </p>
        </div>
        <div className="md:flex-grow">
          <h1 className={title()}>My Portfolio</h1>
          <div className="mb-4" />
          <h2 className={title({ size: "sm" })} id="profile">
            Profile and Contact Info
          </h2>
          <div className="flex flex-col md:flex-row gap-4 mt-6 mb-10">
            <img
              alt="Rishab"
              className="w-full aspect-square md:w-64 md:h-64 object-cover"
              src="WIN_20250609_08_44_51_Pro.jpg"
            />
            <div className="md:flex-grow flex flex-col gap-2">
              <h3 className={subtitle()}>Rishab D</h3>
              <div className="flex gap-2 items-center">
                <Phone />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex gap-2 items-center">
                <AtSign />
                <span>dasgris27@gmail.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <Github />
                <span>@dasgris27</span>
              </div>
            </div>
          </div>
          <h2 className={title({ size: "sm" })} id="work-experience">
            Work Experience
          </h2>
          <p className="mb-2">
            In my school, I have worked on several projects, some individual and
            some collaborative, and also participated in a few competitions.
            This experience has taught me a lot about how the professional world
            works and has given me lessons that I can use in a future job. For
            example, in the first semester of my sales and marketing class in
            tenth grade, we had to write a Business Services Operations Research
            paper to find ways in which AI could be used to enhance the product
            or service of a company. I was researching Zeeks Pizza, and I had to
            interview the managers of both Zeeks Pizza and one of its
            competitors. I had never been in an interview previously, so I did
            not know where to start, so I got advice from my teacher and
            parents, which helped increase my confidence. I learned that
            persistence is important for big projects which require a lot of
            steps, and it helped me learn about some parts of the research
            process, which I can use in a future programming-related career.
            Relating to the professional work environment, my experience
            participating in the DECA role plays, both in the district and state
            competition, has taught me a lot about how to prepare and do
            interviews, presentations, and other things that occur frequently in
            formal office and business settings. This experience has been
            valuable for me to gather insight into what businessmen and
            salespeople do on a regular basis. While this experience has been
            very valuable for me, I am hoping to dive more into programming and
            learn more about a developer&apos;s daily life, which I will discuss
            more in my plans for the future.
          </p>
          <p className="mb-4">
            If you would like to read more about my experiences, feel free to
            check out my blog! My posts talk about the projects I am currently
            working on and other things that are going on in my life.
          </p>
          <Button as={Link} className="mb-10 w-full" href="blog">
            <span>Go to blog</span>
            <ArrowRight />
          </Button>
          <h2 className={title({ size: "sm" })} id="notable-projects">
            Notable Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-4">
            <Card>
              <CardHeader className="p-0">
                <img
                  alt="Minesweeper Recreation"
                  className="w-full aspect-square object-cover"
                  src="dasgris27.github.io_minesweeper.html.png"
                />
              </CardHeader>
              <CardBody className="pb-0">
                <h3 className={subtitle()}>Minesweeper Recreation</h3>
                <p>
                  Same rules as the classic game: as fast as possible, reveal
                  all of the cells without exposing any mines.
                </p>
              </CardBody>
              <CardFooter>
                <Button
                  as={Link}
                  className="w-full"
                  href="projects#games-minesweeper-remake"
                >
                  <span>Learn more</span>
                  <ArrowRight />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <img
                  alt="May 2025 Notebook Check"
                  className="w-full aspect-square object-cover"
                  src="yang-_9dAwWA4LD8-unsplash.jpg"
                />
              </CardHeader>
              <CardBody className="pb-0">
                <h3 className={subtitle()}>May 2025 Notebook Check</h3>
                <p>
                  Includes a fake news page, to-do list, practice with Tailwind,
                  and a mockup for a petting zoo website.
                </p>
              </CardBody>
              <CardFooter>
                <Button
                  as={Link}
                  className="w-full"
                  href="projects#design-class-may-2025-notebook-check"
                >
                  <span>Learn more</span>
                  <ArrowRight />
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="p-0">
                <img
                  alt="March 2025 Notebook Check"
                  className="w-full aspect-square object-cover"
                  src="shayan-ramesht-exSEmuA7R7k-unsplash.jpg"
                />
              </CardHeader>
              <CardBody className="pb-0">
                <h3 className={subtitle()}>March 2025 Notebook Check</h3>
                <p>
                  Includes a basic About Me page, list of recipes, and a fun
                  fact generator.
                </p>
              </CardBody>
              <CardFooter>
                <Button
                  as={Link}
                  className="w-full"
                  href="projects#design-class-march-2025-notebook-check"
                >
                  <span>Learn more</span>
                  <ArrowRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
          <Button as={Link} className="mb-10 w-full" href="projects">
            <span>View all projects</span>
            <ArrowRight />
          </Button>
          <h2 className={title({ size: "sm" })} id="coding-history">
            History with Coding
          </h2>
          <p className="mb-10">
            In my Website Design class in my school, I have learned about how
            frameworks and libraries like React and Tailwind work and how they
            simplify the development process, which has improved the way that I
            build websites and allows me to focus more on the content of my
            pages. In the class, I have built mockup websites such as a news
            page, fun facts generator, and a to-do list. I also enjoy coding at
            home in my free time, and I have learned HTML, CSS, JavaScript, and
            Python in the past, though I use Python slightly less than the other
            languages. Using these languages, I have built a variety of
            projects. In my opinion, the most interesting thing I have made is a
            recreation of Minesweeper, as it was fun using a variety of colors,
            which I rarely do in most websites that I build, and adding
            interactivity, which for me is the most enjoyable part of coding a
            website or game. I hope to build more websites and projects in the
            future to add to my portfolio, and enrich my understanding of web
            development and design.
          </p>
          <h2 className={title({ size: "sm" })} id="future-goals">
            Goals for the Future
          </h2>
          <p className="mb-6">
            For high school, I am planning on taking the second semester of AP
            Computer Science Principles online in eleventh grade to ready myself
            for IB Computer Science SL and HL, which I will also start in
            eleventh grade and finish in twelfth grade. I also plan to take a
            few web design-related courses outside of school to keep my skills
            fresh, and potentially get into internships for teaching younger
            children how to get into coding to gain experience and insight into
            work ethics and the business environment.
          </p>
          <h3 className={title({ size: "xs" })} id="future-courses">
            Courses I Plan to Take
          </h3>
          <Table aria-label="Example static collection table" className="mt-2">
            <TableHeader>
              <TableColumn>TYPE</TableColumn>
              <TableColumn>ELEVENTH GRADE COURSE</TableColumn>
              <TableColumn>TWELFTH GRADE COURSE</TableColumn>
              <TableColumn>COLLEGE COURSE</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>English</TableCell>
                <TableCell>IB Language & Literature SL</TableCell>
                <TableCell>Twelfth Grade English</TableCell>
                <TableCell>None</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>History</TableCell>
                <TableCell>U.S. History</TableCell>
                <TableCell>Civics (one semester)</TableCell>
                <TableCell>None</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Math</TableCell>
                <TableCell>IB HL Math I</TableCell>
                <TableCell>IB HL Math II</TableCell>
                <TableCell>Undecided</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Science</TableCell>
                <TableCell>Physics</TableCell>
                <TableCell>IB Chemistry SL</TableCell>
                <TableCell>None</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>World Language</TableCell>
                <TableCell>Spanish III</TableCell>
                <TableCell>IB Spanish SL</TableCell>
                <TableCell>None</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Computer Science</TableCell>
                <TableCell>IB Computer Science SL</TableCell>
                <TableCell>IB Computer Science HL</TableCell>
                <TableCell>Undecided</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Electives</TableCell>
                <TableCell>Undecided</TableCell>
                <TableCell>PE and Health</TableCell>
                <TableCell>None</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
