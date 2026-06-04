import * as CANNON from 'cannon-es';
import * as THREE from 'three';

export interface PhysicsWorld {
  world: CANNON.World;
  bodies: Map<string, CANNON.Body>;
  addIsland(id: string, x: number, z: number, radius: number): void;
  removeIsland(id: string): void;
  addBoat(id: string, x: number, z: number): CANNON.Body;
  removeBoat(id: string): void;
  checkIslandCollision(x: number, z: number, boatRadius: number): { hit: boolean; nx: number; nz: number; depth: number } | null;
  update(dt: number): void;
  dispose(): void;
}

export function createPhysicsWorld(): PhysicsWorld {
  const world = new CANNON.World();
  world.gravity.set(0, 0, 0);
  world.broadphase = new CANNON.NaiveBroadphase();
  (world.solver as CANNON.GSSolver).iterations = 5;

  const bodies = new Map<string, CANNON.Body>();

  const waterMaterial = new CANNON.Material('water');
  const boatMaterial = new CANNON.Material('boat');
  const islandMaterial = new CANNON.Material('island');

  world.addContactMaterial(new CANNON.ContactMaterial(waterMaterial, boatMaterial, {
    friction: 0.1,
    restitution: 0.3,
  }));
  world.addContactMaterial(new CANNON.ContactMaterial(islandMaterial, boatMaterial, {
    friction: 0.0,
    restitution: 0.0,
  }));

  return {
    world,
    bodies,

    addIsland(id: string, x: number, z: number, radius: number) {
      const shape = new CANNON.Cylinder(radius, radius, 20, 8);
      const body = new CANNON.Body({ mass: 0, material: islandMaterial });
      body.addShape(shape);
      body.position.set(x, 0, z);
      body.collisionResponse = true;
      world.addBody(body);
      bodies.set('island_' + id, body);
    },

    removeIsland(id: string) {
      const key = 'island_' + id;
      const body = bodies.get(key);
      if (body) { world.removeBody(body); bodies.delete(key); }
    },

    addBoat(id: string, x: number, z: number) {
      const shape = new CANNON.Box(new CANNON.Vec3(2, 0.5, 1));
      const body = new CANNON.Body({ mass: 1, material: boatMaterial });
      body.addShape(shape);
      body.position.set(x, 0, z);
      body.linearDamping = 0.95;
      body.angularDamping = 0.9;
      world.addBody(body);
      bodies.set('boat_' + id, body);
      return body;
    },

    removeBoat(id: string) {
      const key = 'boat_' + id;
      const body = bodies.get(key);
      if (body) { world.removeBody(body); bodies.delete(key); }
    },

    checkIslandCollision(x: number, z: number, boatRadius: number) {
      for (const [key, body] of bodies) {
        if (!key.startsWith('island_')) continue;
        const dx = x - body.position.x;
        const dz = z - body.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const islandRadius = (body.shapes[0] as CANNON.Cylinder).radiusTop;
        const minDist = islandRadius + boatRadius;
        if (dist < minDist && dist > 0) {
          const depth = minDist - dist;
          return { hit: true, nx: dx / dist, nz: dz / dist, depth };
        }
      }
      return null;
    },

    update(dt: number) {
      world.step(1 / 60, dt, 3);
    },

    dispose() {
      for (const body of bodies.values()) {
        world.removeBody(body);
      }
      bodies.clear();
    },
  };
}
