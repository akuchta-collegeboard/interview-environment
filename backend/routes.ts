import { TechAssistPortalDatabase } from "./database";
import { Router } from "express";

export function initializeRoutes(db: TechAssistPortalDatabase): Router {
    const routes = Router();
    routes.put('/volunteers', async (req, res) => {
        const volunteer = req.body;
        await db.putVolunteer(volunteer);
        res.status(200).send();
    });

    routes.put('/projects', async (req, res) => {
        const project = req.body;
        project.dueDate = new Date(project.dueDate);
        await db.putProject(project);
        res.status(200).send();
    });

    routes.get('/projects', async (req, res) => {
        const projects = await db.getProjects();
        res.json(projects);
    });
    return routes;
}