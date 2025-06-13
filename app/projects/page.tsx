"use client";

import { ChevronDown, SquareArrowOutUpRight } from "lucide-react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";

import { title, subtitle } from "@/components/primitives";

export default function ProjectsPage() {
  return (
    <div className="relative">
      <div className="flex flex-col lg:flex-row gap-4">
        <Dropdown className="lg:hidden w-full">
          <DropdownTrigger>
            <Button className="lg:hidden">
              <span>View Project Categories</span>
              <ChevronDown />
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="games" href="#games">
              Games
            </DropdownItem>
            {/* <DropdownItem key="tools" href="#tools">
                            Tools
                        </DropdownItem> */}
            <DropdownItem key="design-class" href="#design-class">
              Website Design Class
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className="w-64 h-full flex-shrink-0 sticky top-16 self-start p-2 hidden lg:block">
          <h3 className={subtitle()}>Categories</h3>
          <p>
            <Link href="#games">Games</Link>
          </p>
          {/* <p>
                        <Link href="#tools">Tools</Link>
                    </p> */}
          <p>
            <Link href="#design-class">Website Design Class</Link>
          </p>
        </div>
        <div className="md:flex-grow">
          <h1 className={title()}>My Projects</h1>
          <div className="mb-4" />
          <h2 className={title({ size: "sm" })} id="games">
            Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-12 gap-4">
            <Card id="games-minesweeper-remake">
              <CardHeader className="p-0">
                <img
                  alt="Minesweeper Remake"
                  className="w-full aspect-square object-cover"
                  src="dasgris27.github.io_minesweeper.html.png"
                />
              </CardHeader>
              <CardBody className="pb-0">
                <h3 className={subtitle()}>Minesweeper Recreation</h3>
                <p>
                  A recreation of the classic game with the same rules: reveal
                  all of the cells as quickly as you can without exposing any
                  mines.
                </p>
              </CardBody>
              <CardFooter>
                <Button
                  as={Link}
                  className="w-full"
                  href="https://dasgris27.github.io/minesweeper.html"
                  target="_blank"
                >
                  <span>Open in new tab</span>
                  <SquareArrowOutUpRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
          {/* <h2 className={title({size: "sm"})} id="tools">
                        Tools
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-12 gap-4">
                        <Card>
                            <CardHeader>
                                <div className="w-full aspect-square bg-neutral-500 flex text-center justify-center items-center">
                                    SCREENSHOT
                                </div>
                            </CardHeader>
                            <CardBody className="pt-0">
                                <h3 className={subtitle()}>Lorem Ipsum</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="w-full aspect-square bg-neutral-500 flex text-center justify-center items-center">
                                    SCREENSHOT
                                </div>
                            </CardHeader>
                            <CardBody className="pt-0">
                                <h3 className={subtitle()}>Lorem Ipsum</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="w-full aspect-square bg-neutral-500 flex text-center justify-center items-center">
                                    SCREENSHOT
                                </div>
                            </CardHeader>
                            <CardBody className="pt-0">
                                <h3 className={subtitle()}>Lorem Ipsum</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="w-full aspect-square bg-neutral-500 flex text-center justify-center items-center">
                                    SCREENSHOT
                                </div>
                            </CardHeader>
                            <CardBody className="pt-0">
                                <h3 className={subtitle()}>Lorem Ipsum</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </CardBody>
                        </Card>
                    </div> */}
          <h2 className={title({ size: "sm" })} id="design-class">
            Website Design Class
          </h2>
          <p>
            These are websites that I made while learning web design in Skyline
            High School. <Link href="https://github.com/bbl4kney">Blakney</Link>{" "}
            was my teacher, and he taught us how TailwindCSS works, ways to use
            it to style elements, and how to run a live server to ease the
            development process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-12 gap-4">
            <Card id="design-class-may-2025-notebook-check">
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
                  Our class&apos; progress in May 2025. This includes a fake
                  news page, to-do list, practice with Tailwind, and a mockup
                  for a petting zoo website.
                </p>
              </CardBody>
              <CardFooter>
                <Button
                  as={Link}
                  className="w-full"
                  href="https://may-2025-rishab-dasgupta.vercel.app/"
                  target="_blank"
                >
                  <span>Open in new tab</span>
                  <SquareArrowOutUpRight />
                </Button>
              </CardFooter>
            </Card>
            <Card id="design-class-march-2025-notebook-check">
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
                  Our class&apos; progress in March 2025. Includes a basic About
                  Me page, list of recipes, and a fun fact generator.
                </p>
              </CardBody>
              <CardFooter>
                <Button
                  as={Link}
                  className="w-full"
                  href="https://march-2025-rishab-dasgupta.vercel.app/"
                  target="_blank"
                >
                  <span>Open in new tab</span>
                  <SquareArrowOutUpRight />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
