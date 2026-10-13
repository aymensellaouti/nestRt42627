/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Inject, NotFoundException, Param, ParseIntPipe, Patch, Post, UseInterceptors } from '@nestjs/common';
import { of } from 'rxjs';

import { SayHelloService } from './say-hello.service';
import { LoggerService } from './logger.service';
import { AddSectionDto } from './dto/add-section.dto';
import { LoggerDevService } from './first.service';
import { UpdateSectionDto } from './dto/update-section.dto';


@Controller({
  path:'first',
  version: '1'
})
export class FirstController {
  //sayHelloService = new SayHelloService();
  constructor(
    // A3tini Pizza Thon
    // A3tini instance men LoggerService
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private sectionService: LoggerDevService,
    @Inject('OCC') private findOcc,
  ) {
    this.sayHelloService.hello();
    this.loggerService.log('Je suis le first Controller');
    const index = findOcc(this.ages, 2);
    this.loggerService.log(index);
  }
  sections = [
    { id: 1, section: 'RT', level: 4 },
    { id: 2, section: 'RT', level: 5 },
  ];
  ages = [1, 2, 3, 4];
  @Get('')
  getSections() {
    return this.sectionService.findAll();
  }
  @Get('rxjs')
  getSectionsRxjs() {
    return of(1, 2, 3);
  }

  @Post()
  addSection(@Body() addSectionDto: AddSectionDto) {
    // const id = this.sections.length ? this.sections[this.sections.length - 1].id + 1 : 1;
    // const newSection = {
    //     id,
    //     ...section
    // }
    // this.sections.push(newSection);
    // return newSection;
    console.log('INV1');
    
    return this.sectionService.addSection(addSectionDto);
  }

  @Patch(':id')
  updateSection(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSectionDto: UpdateSectionDto) {
    console.log('INV1');
    return this.sectionService.updateSection(id, updateSectionDto);
  }  
  @Patch('/delete/:id')
  softDeleteSection(
    @Param('id', ParseIntPipe) id: number) 
    {
    console.log('INV1');
    return this.sectionService.softDeleteSection(id);
  }

  @Get('first')
  getFirstSection() {
    return this.sections[0];
  }

  @Get(':id')
  getSectionById(@Param('id') id) {
    const section = this.sections.find((section) => section.id == id);
    if (!section) throw new NotFoundException('Section innexistante');
    return section;
  }
}


