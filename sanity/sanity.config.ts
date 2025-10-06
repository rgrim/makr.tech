// sanity/sanity.config.ts
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { projectId } from './env'
import { structureTool } from 'sanity/structure'
import {schemaTypes} from './schemas'


export default defineConfig({
  basePath: '/studio', // <-- AJOUTEZ CETTE LIGNE
  name: 'default',
  title: 'Makr.tech Blog',
  projectId: 'kihae0ot', // Remplacez par votre ID de projet
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})