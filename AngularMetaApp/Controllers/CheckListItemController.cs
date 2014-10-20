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
    public class CheckListItemController : ApiController
    {
        private ChrisSchwanExamplesEntities db = new ChrisSchwanExamplesEntities();

        // GET api/CheckListItem
        public IQueryable<CheckListItem> GetCheckListItems(long id)
        {
            return from checkListItem in db.CheckListItems where checkListItem.CheckListId == id select checkListItem;
        }

        // PUT api/CheckListItem/5
        public IHttpActionResult PutCheckListItem(long id, CheckListItem checklistitem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != checklistitem.Id)
            {
                return BadRequest();
            }

            db.Entry(checklistitem).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckListItemExists(id))
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

        // POST api/CheckListItem
        [ResponseType(typeof(CheckListItem))]
        public IHttpActionResult PostCheckListItem(CheckListItem checklistitem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CheckListItems.Add(checklistitem);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = checklistitem.Id }, checklistitem);
        }

        // DELETE api/CheckListItem/5
        [ResponseType(typeof(CheckListItem))]
        public IHttpActionResult DeleteCheckListItem(long id)
        {
            CheckListItem checklistitem = db.CheckListItems.Find(id);
            if (checklistitem == null)
            {
                return NotFound();
            }

            db.CheckListItems.Remove(checklistitem);
            db.SaveChanges();

            return Ok(checklistitem);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CheckListItemExists(long id)
        {
            return db.CheckListItems.Count(e => e.Id == id) > 0;
        }
    }
}