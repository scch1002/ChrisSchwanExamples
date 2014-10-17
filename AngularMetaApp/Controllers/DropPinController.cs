using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AngularMetaApp.EntityModel;

namespace AngularMetaApp.Controllers
{
    public class DropPinController : ApiController
    {
        private ChrisSchwanExamplesEntities db = new ChrisSchwanExamplesEntities();

        // GET api/DropPin
        public IQueryable<DropPin> GetDropPins()
        {
            return db.DropPins;
        }

        // GET api/DropPin/5
        [ResponseType(typeof(DropPin))]
        public IHttpActionResult GetDropPin(long id)
        {
            DropPin droppin = db.DropPins.Find(id);
            if (droppin == null)
            {
                return NotFound();
            }

            return Ok(droppin);
        }

        // PUT api/DropPin/5
        public IHttpActionResult PutDropPin(long id, DropPin droppin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != droppin.Id)
            {
                return BadRequest();
            }

            db.Entry(droppin).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DropPinExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/DropPin
        [ResponseType(typeof(DropPin))]
        public IHttpActionResult PostDropPin(DropPin droppin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.DropPins.Add(droppin);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (DropPinExists(droppin.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = droppin.Id }, droppin);
        }

        // DELETE api/DropPin/5
        [ResponseType(typeof(DropPin))]
        public IHttpActionResult DeleteDropPin(long id)
        {
            DropPin droppin = db.DropPins.Find(id);
            if (droppin == null)
            {
                return NotFound();
            }

            db.DropPins.Remove(droppin);
            db.SaveChanges();

            return Ok(droppin);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DropPinExists(long id)
        {
            return db.DropPins.Count(e => e.Id == id) > 0;
        }
    }
}