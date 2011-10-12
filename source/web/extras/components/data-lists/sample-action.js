/**
 * DataList "Sample" action
 * 
 * @namespace Alfresco
 * @class Alfresco.service.DataListActions
 */
(function()
{
   /**
    * Sample datalist action
    *
    * @method onActionSample
    * @param file {object} Object literal representing one or more file(s) or folder(s) to be actioned
    */
    Alfresco.service.DataListActions.prototype.onActionSample = function DL_onActionSample(file)
    {
        Alfresco.util.PopupManager.displayMessage({
            text:this.msg('actions.datalist.sample.message')
        });
        
        /*
         * Example using genericAction() function
         * 
         this.modules.actions.genericAction(
         {
            success:
            {
               event:
               {
                  name: "dataItemsDuplicated",
                  obj:
                  {
                     items: items
                  }
               },
               message: this.msg("message.duplicate.success", items.length)
            },
            failure:
            {
               message: this.msg("message.duplicate.failure")
            },
            webscript:
            {
               method: Alfresco.util.Ajax.POST,
               name: "duplicate/node/" + destinationNodeRef.uri
            },
            config:
            {
               requestContentType: Alfresco.util.Ajax.JSON,
               dataObj:
               {
                  nodeRefs: nodeRefs
               }
            }
         });
      */
   };
})();
