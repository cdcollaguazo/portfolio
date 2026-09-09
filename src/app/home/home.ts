import { Component, signal } from '@angular/core';
import { Experience } from './experience';
import { Stack } from './stack';
import { ExperienceCard } from './experience-card/experience-card';
import { StackCard } from './stack-card/stack-card';

@Component({
  selector: 'app-home',
  imports: [ExperienceCard, StackCard],
  templateUrl: './home.html',
})
export class Home {

  experiences = signal<Experience[]>([
    {
      company: 'State Street',
      role: 'Full-stack Developer',
      location: 'Kilkenny, Ireland',
      period: 'Nov 2025 - Aug 2026',
      logo: '/images/state-street.png',
      description: 'Worked in the development, maintenance and modernization of three business-critical Identity and Access Management (IAM) applications relied on by thousands of users globally.',
      highlights: [
        'Led the end-to-end delivery of an asynchronous request-reply integration for a centralized entitlement platform, designing and developing a Spring-based REST API and an HTTP callback workflow, while aligning system requirements with stakeholders and coordinating cross-functional teams through testing and production.',
        'Placed 3rd out of 25 teams in an internal hackathon by implementing a policy-based authorization system, leading a team of 5 engineers and taking ownership of the deployment to AWS and back-end development using Cedar and Spring Boot.'
      ],
      technologies: ['Java', 'Spring Boot', 'React', 'Oracle', 'Bash', 'AWS']
    },
    {
      company: 'Kapsch TrafficCom',
      role: 'Software Engineer',
      location: 'Madrid, Spain',
      period: 'Aug 2023 - Oct 2025',
      logo: '/images/kapsch.jpg',
      description: 'Collaborated in the development of an Advanced Traffic Management System (ATMS), implementing a new modern version and supporting ongoing projects used daily by hundreds of operators in 5+ countries.',
      highlights: [
        'Diagnosed and resolved concurrency issues (race conditions, deadlocks) in multi-threaded Java components, removing bottlenecks in frequent user actions and ensuring the stability of operating systems.',
        'Delivered end-to-end full-stack functionalities across two stacks (Java 8 and Swing / Java 21, Angular 18, and NgRx), developing backend features, REST APIs and UI components to expand platform capabilities.'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'Swing', 'PostgreSQL', 'Bash', 'Docker']
    },
    {
      company: 'Inetum',
      role: 'Back-end Developer Intern',
      location: 'Madrid, Spain',
      period: 'Jul 2022 - Dec 2022',
      logo: '/images/inetum.svg',
      description: 'Contributed to the back-end development of a customer corporate portal.',
      highlights: [
        'Migrated legacy SOAP web services to REST APIs using Java and Spring, validating integrations with Postman.',
        'Increased automated test coverage to over 80% using JUnit and Mockito, with quality monitoring through SonarQube.'
      ],
      technologies: [ 'Java', 'Spring', 'JUnit', 'Mockito', 'Oracle']
    }
  ]);

  stacks = signal<Stack[]>([
    {
      name: 'Backend',
      icon: './sprite.svg#backend',
      technologies: ['Java', 'Spring', 'Spring Boot', 'JUnit', 'Mockito', 'Maven'],
      practices: ['SOLID', 'Test-driven Development (TDD)', 'Domain-driven Design (DDD)', 'Hexagonal Architecture', 'REST APIs', 'Microservices Architecture', 'Event-driven Architecture']
    },
    {
      name: 'Frontend',
      icon: './sprite.svg#frontend',
      technologies: ['Angular', 'NgRx', 'TypeScript', 'HTML', 'CSS', 'Tailwind'],
      practices: ['Single Page Application (SPA)', 'Responsive', 'Redux pattern', 'Zoneless']
    },
    {
      name: 'Data',
      icon: './sprite.svg#data',
      technologies: ['PostgreSQL', 'Oracle', 'Hibernate'],
      practices: ['ACID', 'Query Optimization', 'Database Migrations']
    },
    {
      name: 'DevOps',
      icon: './sprite.svg#devops',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'AWS CDK', 'Bash', 'GitHub Actions'],
      practices: ['CI/CD', 'Infrastructure as Code (IaC)']
    }
  ]);

}
