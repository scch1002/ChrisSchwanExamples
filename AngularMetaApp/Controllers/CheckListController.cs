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
    public class CheckListController : ApiController
    {
        private ChrisSchwanExamplesEntities db = new ChrisSchwanExamplesEntities();

        // GET api/CheckList
        public IQueryable<CheckList> GetCheckLists()
        {
            return db.CheckLists;
        }

        // GET api/CheckList/5
        [ResponseType(typeof(CheckList))]
        public IHttpActionResult GetCheckList(long id)
        {
            CheckList checklist = db.CheckLists.Find(id);
            if (checklist == null)
            {
                return NotFound();
            }

            return Ok(checklist);
        }

        // PUT api/CheckList/5
        public IHttpActionResult PutCheckList(long id, CheckList checklist)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != checklist.Id)
            {
                return BadRequest();
            }

            db.Entry(checklist).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckListExists(id))
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

        // POST api/CheckList
        [ResponseType(typeof(CheckList))]
        public IHttpActionResult PostCheckList(CheckList checklist)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CheckLists.Add(checklist);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = checklist.Id }, checklist);
        }

        // DELETE api/CheckList/5
        [ResponseType(typeof(CheckList))]
        public IHttpActionResult DeleteCheckList(long id)
        {
            CheckList checklist = db.CheckLists.Find(id);
            if (checklist == null)
            {
                return NotFound();
            }

            db.CheckLists.Remove(checklist);
            db.SaveChanges();

            return Ok(checklist);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CheckListExists(long id)
        {
            return db.CheckLists.Count(e => e.Id == id) > 0;
        }
    }
}