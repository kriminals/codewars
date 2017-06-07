/*
 * For this exercise you will be strengthening your page-fu mastery. 
 * You will complete the PaginationHelper class, which is a utility class helpful
 * for querying paging information related to an array.
 * The class is designed to take in an array of values and an integer indicating
 * how many items will be allowed per each page. The types of values contained 
 * within the collection/array are not relevant. 
 */
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
     this.collection = collection; 
     this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;  
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);  
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if (pageIndex > this.pageCount() -1 || pageIndex < 0) return -1;
    return pageIndex == this.pageCount() -1 
        ? this.itemCount() % this.itemsPerPage: this.itemsPerPage;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex < 0 || itemIndex > this.itemCount() - 1) return -1;
    return Math.floor(itemIndex / this.itemsPerPage); 
}
