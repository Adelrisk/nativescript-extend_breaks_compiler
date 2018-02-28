import { Observable } from 'tns-core-modules/data/observable';
import { Extend_breaks_java_compiler } from '@example/nativescript-extend_breaks_java_compiler';

export class HelloWorldModel extends Observable {
  public message: string;
  private extend_breaks_java_compiler: Extend_breaks_java_compiler;

  constructor() {
    super();

    this.extend_breaks_java_compiler = new Extend_breaks_java_compiler();
    this.message = this.extend_breaks_java_compiler.message;
  }
}
