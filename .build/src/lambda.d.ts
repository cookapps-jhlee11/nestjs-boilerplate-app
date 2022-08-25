import { Context } from "aws-lambda";
import { Response } from "aws-serverless-express";
import { INestApplication } from "@nestjs/common";
import { Express } from "express";
export declare function createApp(expressApp: Express): Promise<INestApplication>;
export declare function handler(event: any, context: Context): Promise<Response>;
